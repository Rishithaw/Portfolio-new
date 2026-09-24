import Link from "next/link";
import { navLinks as links } from "@/components/navLinks";

export default function Navbar() {
  return (
    <header className="border-b border-foreground/10">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-5 sm:px-10">
        <Link
          href="/"
          className="text-sm font-medium tracking-wide transition hover:opacity-70"
        >
          Rishitha Wickramasinghe
        </Link>
        <ul className="flex flex-wrap items-center gap-5 sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
