import { NextResponse } from "next/server"

// Run on the Node.js runtime so the in-memory limiter below persists between
// invocations on a warm serverless instance.
export const runtime = "nodejs"

/* ------------------------------------------------------------------ *
 * Simple in-memory rate limiter (per IP).
 * Stops one sender from flooding the inbox — even if they call the API
 * directly from the browser console and bypass the form UI.
 *
 * Note: state lives per serverless instance. For a personal site this is
 * plenty; for very high traffic, swap this for Vercel KV / Upstash Redis.
 * ------------------------------------------------------------------ */
const WINDOW_MS = 60 * 60 * 1000 // 1 hour window
const MAX_PER_WINDOW = 5 // at most 5 messages per hour per IP
const COOLDOWN_MS = 30 * 1000 // at least 30s between messages

type Hit = { count: number; windowStart: number; last: number }
const hits = new Map<string, Hit>()

function getIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for")
  if (xff) return xff.split(",")[0].trim()
  return req.headers.get("x-real-ip") || "unknown"
}

function prune(now: number) {
  if (hits.size < 500) return
  for (const [k, v] of hits) if (now - v.last > WINDOW_MS) hits.delete(k)
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

const clean = (v: unknown, max: number): string => (typeof v === "string" ? v.trim().slice(0, max) : "")
const isEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export async function POST(request: Request) {
  try {
    const now = Date.now()
    const ip = getIp(request)
    prune(now)

    // ---- 1. Rate-limit check (before doing any work) ----
    const rec = hits.get(ip)
    if (rec) {
      if (now - rec.windowStart > WINDOW_MS) {
        rec.windowStart = now
        rec.count = 0
      }
      if (now - rec.last < COOLDOWN_MS) {
        const retryAfter = Math.ceil((COOLDOWN_MS - (now - rec.last)) / 1000)
        return NextResponse.json(
          { error: "Too many requests. Please slow down.", retryAfter },
          { status: 429, headers: { "Retry-After": String(retryAfter) } },
        )
      }
      if (rec.count >= MAX_PER_WINDOW) {
        const retryAfter = Math.ceil((WINDOW_MS - (now - rec.windowStart)) / 1000)
        return NextResponse.json(
          { error: "Message limit reached. Please try again later.", retryAfter },
          { status: 429, headers: { "Retry-After": String(retryAfter) } },
        )
      }
    }

    const body = await request.json().catch(() => null)
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 })
    }

    const { name, email, subject, message, botcheck, elapsed } = body as Record<string, unknown>

    // ---- 2. Honeypot: real people never fill this hidden field ----
    if (typeof botcheck === "string" && botcheck.trim() !== "") {
      // Pretend success so bots don't learn they were blocked.
      return NextResponse.json({ success: true })
    }

    // ---- 3. Timing: forms submitted almost instantly are bots ----
    if (typeof elapsed === "number" && elapsed >= 0 && elapsed < 1500) {
      return NextResponse.json({ success: true })
    }

    // ---- 4. Validate & bound input sizes ----
    const n = clean(name, 100)
    const e = clean(email, 150)
    const s = clean(subject, 150)
    const m = clean(message, 5000)
    if (!n || !e || !m || !isEmail(e)) {
      return NextResponse.json(
        { error: "Please provide your name, a valid email, and a message." },
        { status: 400 },
      )
    }

    // ---- 5. Reserve the slot BEFORE sending (closes the race) ----
    if (rec) {
      rec.count += 1
      rec.last = now
    } else {
      hits.set(ip, { count: 1, windowStart: now, last: now })
    }

    // ---- 6. Send via Resend ----
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 })
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${resendApiKey}` },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["yahyademeriah@gmail.com"],
        reply_to: e,
        subject: `New message from your site: ${s || "No subject"}`,
        text: `Name: ${n}\nEmail: ${e}\nSubject: ${s}\n\nMessage:\n${m}`,
        html: `<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${escapeHtml(n)}</p>
<p><strong>Email:</strong> ${escapeHtml(e)}</p>
<p><strong>Subject:</strong> ${escapeHtml(s)}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${escapeHtml(m).replace(/\n/g, "<br/>")}</p>`,
      }),
    })

    if (!response.ok) {
      const err = await response.json().catch(() => ({}))
      return NextResponse.json(
        { error: "Failed to send email.", details: (err as { message?: string })?.message || "Unknown error" },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 })
  }
}
