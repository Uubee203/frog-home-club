import { Star } from "lucide-react";

/**
 * Google reviews slot.
 * When a Google reviews widget is ready, paste its embed (iframe or widget
 * script container) where marked below and remove the placeholder.
 * Never add made-up testimonials here.
 */
export function Reviews() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">
        <p className="eyebrow text-leaf">Reviews</p>
        <h2 className="mt-3 text-6xl text-forest sm:text-7xl">What Our Members Say</h2>

        {/* GOOGLE REVIEWS EMBED: place widget here */}
        <div
          id="google-reviews"
          className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 rounded-xl border-2 border-dashed border-forest/20 bg-card px-6 py-12"
        >
          <div className="flex gap-1 text-stone" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6" />
            ))}
          </div>
          <p className="font-sub text-xl font-bold text-forest">Reviews coming soon.</p>
        </div>
      </div>
    </section>
  );
}
