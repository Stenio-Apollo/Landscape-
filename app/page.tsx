import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { GsapReveal } from "@/components/gsap-reveal";
import { HomeHero } from "@/components/home-hero";
import { business, reviewHighlights, services, stats } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapeArchitect",
  name: business.name,
  description: business.summary,
  telephone: "+1-801-860-8527",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4482 S 5760 W",
    addressLocality: "West Valley City",
    addressRegion: "UT",
    postalCode: "84128",
    addressCountry: "US",
  },
  areaServed: ["West Valley City", "Salt Lake Valley"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "23",
  },
  openingHours: "Fr 07:00-17:00",
};

export default function Home() {
  return (
    <main className="min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section-shell pt-10">
        <HomeHero />
      </section>

      <GsapReveal className="section-shell pt-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          <span className="eyebrow">Services</span>
          <h2 className="font-display text-4xl font-semibold text-pine sm:text-5xl">
            Multi-page structure up front, fast access to the essentials.
          </h2>
          <p className="text-lg leading-8 text-bark/75">
            Instead of forcing everything into one long scroll, the homepage previews what matters and hands visitors off to dedicated pages with cleaner navigation.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2">
          {services.slice(0, 4).map((service, index) => (
            <article
              key={service.title}
              className="section-card service-card p-7"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <h3 className=" font-display text-3xl font-semibold text-pine">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-bark/75">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/services" className="cta-glow inline-flex rounded-full bg-pine px-6 py-4 text-sm font-semibold text-sand transition hover:bg-bark">
            See Full Services Page
          </Link>
        </div>
      </GsapReveal>

      <GsapReveal className="section-shell pt-16" delay={0.05}>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-card p-8">
            <span className="eyebrow">Why Homeowners Choose Them</span>
            <h2 className="mt-5 font-display text-4xl font-semibold text-pine">Clear communication. Strong results. Local trust.</h2>
            <p className="mt-5 text-lg leading-8 text-bark/75">
              The strongest signals from current reviews are consistent: fair pricing, responsive communication, and finished yards that clients are excited about.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {reviewHighlights.map((review, index) => (
              <blockquote
                key={review.author}
                className="section-card review-card flex h-full flex-col justify-between p-7"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <p className="text-lg leading-8 text-bark/80">&ldquo;{review.quote}&rdquo;</p>
                <footer className="mt-6">
                  <p className="font-semibold text-pine">{review.author}</p>
                  <p className="text-sm text-bark/60">Google review</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Link href="/reviews" className="inline-flex rounded-full border border-pine/15 px-6 py-4 text-sm font-semibold text-pine transition hover:border-pine/40 hover:bg-pine/5">
            Read Review Highlights
          </Link>
        </div>
      </GsapReveal>

      <GsapReveal className="section-shell pt-16" delay={0.08}>
        <div className="mx-auto grid max-w-5xl section-card gap-8 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 font-display text-4xl font-semibold text-pine">Essential details without extra clutter.</h2>
          </div>

          <FaqList />
        </div>
      </GsapReveal>

      <GsapReveal className="section-shell pt-16" delay={0.12}>
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] bg-pine px-8 py-10 text-sand shadow-soft lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sand/75">
                Contact
              </span>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
                Start with a call and make the next step easy.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-sand/75">
                If you are planning a new build or a yard remodel in West Valley City or a nearby area, call to discuss scope, timing, and availability.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-sand px-6 py-4 text-center text-sm font-semibold text-pine transition hover:bg-white"
              >
                Contact Page
              </Link>
              <p className="text-sm text-sand/70">{business.addressLines.join(", ")}</p>
            </div>
          </div>
        </div>
      </GsapReveal>
    </main>
  );
}
