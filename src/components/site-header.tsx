"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Karate", href: "/karate" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <Link href="/" className="brand-mark" aria-label="Satish Kumar Nagaraj home" onClick={() => setMenuOpen(false)}>
          <span className="brand-monogram">SN</span>
          <span className="brand-name">SATISH KUMAR <span className="brand-surname">NAGARAJ</span></span>
        </Link>
        <nav className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
          <Link className="nav-contact" href="/contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>
    </>
  );
}