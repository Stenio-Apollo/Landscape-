import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { business, reviewHighlights } from "@/data/site";

export const metadata: Metadata = {
  title: `Reviews | ${business.name}`,
  description:
    "Read customer review highlights for 4 Corners Landscaping, a 5.0-rated landscaping company serving West Valley City and nearby Utah communities.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Proof that speaks to quality, responsiveness, and finished results."
        description="The strongest review themes are clear communication, fair pricing, and clients being genuinely happy with the way their yards turned out."
        primaryHref="/contact"
        primaryLabel="Call For Availability"
      />

      <section className="section-shell pt-16">
        <div className="grid gap-6 md:grid-cols-3">
          {reviewHighlights.map((review, index) => (
            <blockquote
              key={review.author}
              className="section-card review-card flex h-full flex-col justify-between p-7"
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <p className="text-lg leading-8 text-bark/80">&ldquo;{review.quote}&rdquo;</p>
              <footer className="mt-8">
                <p className="font-semibold text-pine">{review.author}</p>
                <p className="text-sm text-bark/60">Google review</p>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 section-card p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/45">Rating Snapshot</p>
          <div className="mt-4 flex flex-wrap items-end gap-4">
            <p className="font-display text-6xl font-semibold text-pine">{business.rating}</p>
            <p className="pb-2 text-lg text-bark/70">based on {business.reviewCount} Google reviews</p>
          </div>
        </div>
      </section>
    </>
  );
}
