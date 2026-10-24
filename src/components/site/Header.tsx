import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/frog-home-club-horizontal.png";
import { NAV_LINKS, PHONE_DISPLAY, TEL_HREF } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-on-dark/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Frog Home Club"
            width={1321}
            height={465}
            className="h-11 w-auto sm:h-14"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="rounded-md px-3 py-2 font-sub text-sm font-semibold uppercase tracking-wider text-on-dark-muted transition-colors hover:text-lime data-[status=active]:text-lime"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={TEL_HREF}
            className="flex items-center gap-2 rounded-md bg-leaf px-3 py-2 font-display text-lg tracking-wider text-primary-foreground transition-colors hover:bg-lime hover:text-forest-deep sm:px-4"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">Call or Text {PHONE_DISPLAY}</span>
            <span className="flex flex-col leading-none sm:hidden">
              <span className="font-sub text-[0.6rem] font-bold uppercase tracking-widest">
                Call or Text
              </span>
              <span>{PHONE_DISPLAY}</span>
            </span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-on-dark lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-on-dark/10 bg-ink lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: true }}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-3xl text-on-dark data-[status=active]:text-lime"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
