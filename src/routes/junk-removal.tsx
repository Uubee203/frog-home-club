import { createFileRoute } from "@tanstack/react-router";
import {
  Archive,
  Ban,
  BedDouble,
  Camera,
  Flame,
  Package,
  Sofa,
  TreePine,
  Warehouse,
} from "lucide-react";
import junkHaul from "@/assets/junk-haul.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CallTextButtons } from "@/components/site/CallTextButtons";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq, type FaqItem } from "@/components/site/Faq";
import { PHONE_DISPLAY, SMS_HREF } from "@/lib/site";

const TITLE = "Junk Removal in DFW | Frog Home Club";
const DESC =
  "Furniture, yard debris, and garage cleanouts hauled away across Dallas-Fort Worth. Text a photo for a quote.";

export const Route = createFileRoute("/junk-removal")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://froghomeclub.com/junk-removal" },
    ],
    links: [{ rel: "canonical", href: "https://froghomeclub.com/junk-removal" }],
  }),
  component: JunkRemoval,
});

const hauls = [
  { icon: Sofa, label: "Furniture" },
  { icon: BedDouble, label: "Mattresses" },
  { icon: Flame, label: "Old grills and patio furniture" },
  { icon: TreePine, label: "Yard debris and brush" },
  { icon: Warehouse, label: "Garage cleanouts" },
  { icon: Archive, label: "Attic and storage cleanouts" },
  { icon: Package, label: "Boxes and household clutter" },
];

const faqs: FaqItem[] = [
  {
    q: "How is pricing determined?",
    a: "Pricing depends on how much needs to go. Text us a photo for a quote.",
  },
  {
    q: "Do I need to move items to the curb?",
    a: "No. We pick up from your garage, yard, or home.",
  },
  {
    q: "Do I need to be home?",
    a: "Not always. If everything is outside or in an open garage, we can haul it while you're away. For pickups inside the home, someone will need to let us in. We'll sort out the details when we confirm your time.",
  },
];

function JunkRemoval() {
  return (
    <>
      <PageHero
        eyebrow="Junk Removal"
        title="Got junk? Get ribbit."
        intro="Clear the clutter and reclaim your space. Point to it, and we'll haul it away."
        image={junkHaul}
        imageAlt="Trailer loaded with a mattress, grill, and furniture beside an emptied garage"
      >
        <CallTextButtons
          callLabel="Call for a Junk Quote"
          textLabel="Text a Photo for a Quote"
        />
      </PageHero>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="eyebrow text-leaf">What We Haul</p>
            <h2 className="mt-3 text-6xl text-forest sm:text-7xl">Point to it. Gone.</h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {hauls.map((h) => (
                <li
                  key={h.label}
                  className="flex items-center gap-4 rounded-xl border bg-card p-5 shadow-card"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-forest text-lime">
                    <h.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-sub text-lg font-bold text-forest">{h.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-2xl border-2 border-destructive/30 bg-card p-7">
              <p className="eyebrow flex items-center gap-2 text-destructive">
                <Ban className="h-4 w-4" aria-hidden /> What We Don't Take
              </p>
              <p className="mt-3 text-lg text-foreground">
                Hazardous materials such as paint, chemicals, or fuel.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-forest-gradient p-7">
              <div className="mow-stripes absolute inset-0" aria-hidden />
              <div className="relative">
                <p className="eyebrow flex items-center gap-2 text-lime">
                  <Camera className="h-4 w-4" aria-hidden /> Fastest Way to a Quote
                </p>
                <h3 className="mt-3 text-5xl text-on-dark">Snap. Text. Done.</h3>
                <p className="mt-3 text-on-dark-muted">
                  Text a photo of what needs to go to{" "}
                  <a href={SMS_HREF} className="font-semibold text-lime underline-offset-4 hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                  .
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Faq items={faqs} />

      <CtaBand
        title="Got junk? Get ribbit."
        callLabel="Call for a Junk Removal Quote"
        textLabel="Text for a Junk Removal Quote"
      />
    </>
  );
}
