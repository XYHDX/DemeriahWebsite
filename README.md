# Yahya Demeriah — Personal Website

Personal portfolio for **Eng. Yahya Demeriah — Robotics & AI Engineer** (Damascus, Syria),
rebuilt on the Next.js site to match the portfolio's digital identity:

- **Syrian identity palette** — dark teal‑green (`#0e4d40`) + Qasioun gold (`#a8843d`) on warm
  parchment, with a deep‑evergreen **dark mode**.
- **Bilingual EN / AR** with full RTL, toggled from the navbar.
- **Light / dark** theme toggle (remembers your choice).
- Interactive particle hero (recolored to the identity), plus About, Experience, Projects,
  Awards, Skills, Education and Contact sections.

## See it instantly (no build)
Open **`preview.html`** in any browser — it’s a self‑contained snapshot of the site with the
language and theme toggles working. Great for a quick look or sharing.

## Run the real site
```bash
npm install          # first time only
npm run dev          # http://localhost:3000
```
Build for production: `npm run build` then `npm start`.

## Deploy (recommended: Vercel)
1. Push this folder to a GitHub repo.
2. Import it at vercel.com → it auto‑detects Next.js.
3. (Optional) To make the contact form send email, add an env var `RESEND_API_KEY`
   (from resend.com). Without it, the rest of the site works fine.

## Edit your content
All text (English + Arabic) lives in one file: **`lib/content.ts`** — experience, projects,
awards, skills, contact, etc. Edit there and every section updates.

- Colors / fonts: `app/globals.css` (the `--accent`, `--bg`, … tokens for light and `.dark`).
- Your CV download: replace `public/Yahya_Demeriah_CV.docx`.
- Page order / sections: `app/page.tsx`.

## Notes
- The original project shipped with unused racing/3D template components (in `components/`,
  `components/ui/`, `hooks/`). They aren’t imported anywhere and are **not** included in the
  build, so they’re harmless — but you can safely delete them for a tidier repo.
