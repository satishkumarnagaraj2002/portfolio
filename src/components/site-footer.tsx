import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="footer-signature">SATISH KUMAR <span>N</span></Link>
      <p>{profile.location} <span className="footer-dot" /> Building with intent.</p>
      <Link href="/#top" className="back-top">Back to top <ArrowUpRight size={14} /></Link>
      <small>© 2026 Satish Kumar N</small>
    </footer>
  );
}