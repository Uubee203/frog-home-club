import { Link } from "@tanstack/react-router";
import logo from "@/assets/frog-home-club-logo.png.asset.json";
import { NAV_LINKS, PHONE_DISPLAY, SMS_HREF, TEL_HREF } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink pb-28 text-on-dark-muted lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="flex items-start gap-4">
          <img src={logo.url} alt="" width={64} height={64} loading="lazy" className="h-16 w-16" />
          <div>
            <p className="font-display text-3xl text-on-dark">Frog Home Club</p>
            <p className="mt-1 text-sm">Lawn care and junk removal. Serving DFW.</p>
          </div>
        </div>

        <div>
          <p className="eyebrow text-lime">Call or Text</p>
          <p className="mt-2 font-display text-4xl text-on-dark">
            <a href={TEL_HREF} className="hover:text-lime">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a href={TEL_HREF} className="underline-offset-4 hover:text-lime hover:underline">
              Call
            </a>
            <span className="mx-2">/</span>
            <a href={SMS_HREF} className="underline-offset-4 hover:text-lime hover:underline">
              Text
            </a>
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow text-lime">Pages</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-lime">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-on-dark/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs sm:px-6">
          © {year} Frog Home Club. Call or Text {PHONE_DISPLAY}. Serving DFW.
        </p>
      </div>
    </footer>
  );
}
