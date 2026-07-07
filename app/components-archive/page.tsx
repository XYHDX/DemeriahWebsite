import { redirect } from "next/navigation"

// The racing/3D component archive was removed during the portfolio rebuild.
// Redirect any lingering links back to the homepage.
export default function ComponentsArchivePage() {
  redirect("/")
}
