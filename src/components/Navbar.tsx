"use client";

import Link from "next/link";
import { useState } from "react";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["Posts", "/posts"],
  ["Resume", "/resume"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)} aria-label="Revanth Ajoe A">Revanth Ajoe A</Link>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-navigation">
          <span>{open ? "Close" : "Menu"}</span>
        </button>
        <nav id="site-navigation" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          <div className="nav-links">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          </div>
          <div className="social-links">
            <a href={profile.social.github} aria-label="GitHub">GitHub</a>
            <a href={profile.social.linkedin} aria-label="LinkedIn">LinkedIn</a>
            <a href={profile.social.email} aria-label="Email">Email</a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
