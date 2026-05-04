import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/70 bg-neutral-950/90 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-neutral-100 transition-colors duration-200 hover:text-neutral-300"
        >
          Juan Villacorta
        </Link>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-neutral-400">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="rounded-sm transition-colors duration-200 hover:text-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
