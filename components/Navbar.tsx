"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#what-we-do", label: "What we do" },
  { href: "#explore", label: "Explore" },
  { href: "#forum", label: "Forum" },
  { href: "#get-involved", label: "Get involved" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 mb-3 sm:top-4 sm:mb-4">
      <nav className="glass flex items-center justify-between rounded-[28px] px-4 py-3 sm:px-5">
        <Logo inverted />
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#get-involved"
            className="btn-primary hidden h-11 px-5 py-0 text-sm md:inline-flex"
          >
            Get Involved
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full bg-white text-ink md:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M4 4l10 10M14 4 4 14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5h12M3 9h12M3 13h12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {open ? (
        <div className="glass mt-2 rounded-3xl p-3 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-involved"
            className="btn-primary mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Get Involved
          </a>
        </div>
      ) : null}
    </header>
  );
}
