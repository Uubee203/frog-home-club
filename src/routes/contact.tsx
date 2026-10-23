import { createFileRoute } from "@tanstack/react-router";
import { Camera, MapPin, Phone } from "lucide-react";
import mascot from "@/assets/frog-home-club-mascot.png.asset.json";
import { CallTextButtons } from "@/components/site/CallTextButtons";
import { PHONE_DISPLAY, SERVICE_AREA, TEL_HREF } from "@/lib/site";

const TITLE = "Contact | Frog Home Club";
const DESC =
  "Call or text Frog Home Club at (469) 608-0583 for a quote. Serving the Dallas-Fort Worth area.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://froghomeclub.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://froghomeclub.com/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="relative overflow-hidden bg-forest-gradient">
      <div className="mow-stripes absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.3fr_1fr]">
        <div className="animate-rise">
          <p className="eyebrow text-lime">Contact</p>
          <h1 className="mt-4 text-8xl text-on-dark sm:text-9xl">
            Get <span className="text-lime">ribbit.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-on-dark-muted sm:text-xl">
            Call or text for a quote. Texting a photo of the job is the fastest way to get a price.
          </p>

          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-on-dark/10 bg-ink/40 p-6 backdrop-blur">
              <dt className="eyebrow flex items-center gap-2 text-lime">
                <Phone className="h-4 w-4" aria-hidden /> Phone (Call or Text)
              </dt>
              <dd className="mt-2 font-display text-4xl text-on-dark">
                <a href={TEL_HREF} className="hover:text-lime">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div className="rounded-2xl border border-on-dark/10 bg-ink/40 p-6 backdrop-blur">
              <dt className="eyebrow flex items-center gap-2 text-lime">
                <MapPin className="h-4 w-4" aria-hidden /> Service Area
              </dt>
              <dd className="mt-2 font-display text-4xl text-on-dark">{SERVICE_AREA}</dd>
            </div>
          </dl>

          <CallTextButtons className="mt-10" />

          <p className="mt-6 flex items-center gap-2 text-sm text-on-dark-muted">
            <Camera className="h-4 w-4 text-lime" aria-hidden />
            Tip: include your address and a photo for the quickest quote.
          </p>
        </div>

        <img
          src={mascot.url}
          alt="Frog Home Club mascot"
          width={376}
          height={320}
          className="mx-auto hidden w-full max-w-sm drop-shadow-2xl lg:block"
        />
      </div>
    </section>
  );
}
