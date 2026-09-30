"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks as links } from "@/components/navLinks";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide transition hover:text-accent"
        >
          Rishitha Wickramasinghe
        </Link>

        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "border-accent text-foreground"
                    : "border-transparent text-foreground/65 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="border border-foreground/15 p-2 text-foreground/80 transition-colors hover:border-foreground/40 hover:text-foreground sm:hidden"
        >
          {isOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="motion-fade-up border-t border-foreground/10 px-6 py-4 sm:hidden"
        >
          <ul className="mx-auto flex max-w-5xl flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`block border-l-2 px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "border-accent bg-foreground/5 text-foreground"
                      : "border-transparent text-foreground/65 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
