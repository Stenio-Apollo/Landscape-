import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: `About ${business.name} | West Valley City Landscaping`,
  description:
    "Learn about 4 Corners Landscaping, a West Valley City landscape contractor focused on communication, craftsmanship, and clean outdoor builds.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-16">
      <PageHero
        eyebrow="About"
        title="A local landscaping company built around strong communication and dependable work."
        description="The brand position is straightforward: answer the phone, communicate clearly, price fairly, and leave clients with outdoor spaces they feel good about."
        primaryHref="/contact"
        primaryLabel="Talk About Your Project"
      />

      <section className="section-shell pt-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-sand/10 bg-sand/95 p-7 shadow-[0_20px_44px_rgba(0,0,0,0.18)] lg:col-span-2">
            <h2 className="font-display text-4xl font-semibold text-pine">What the site should communicate</h2>
            <p className="mt-4 text-base leading-8 text-bark/75">
              This company does not need crowded marketing copy. It needs a clear presence that makes the business feel established, easy to work with, and local to West Valley City. That is why the structure favors short sections, direct calls to action, and visible proof.
            </p>
          </article>

          <aside className="rounded-[2rem] border border-sand/10 bg-sand/95 p-7 shadow-[0_20px_44px_rgba(0,0,0,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/45">Based In</p>
            <p className="mt-4 text-2xl font-semibold text-pine">
              {business.addressLines[0]}
              <br />
              {business.addressLines[1]}
            </p>
          </aside>
        </div>
      </section>

      <section className="section-shell pt-16">
        <div className="rounded-[2rem] border border-sand/10 bg-sand/95 p-8 shadow-[0_20px_44px_rgba(0,0,0,0.18)] lg:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] bg-white/75 p-6">
              <h3 className="font-display text-3xl font-semibold text-pine">Local Focus</h3>
              <p className="mt-3 text-sm leading-7 text-bark/75">
                The content stays rooted in West Valley City and nearby service areas to support local search and relevance.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-white/75 p-6">
              <h3 className="font-display text-3xl font-semibold text-pine">Simple Journeys</h3>
              <p className="mt-3 text-sm leading-7 text-bark/75">
                Separate pages keep the user from digging through a long homepage just to find services, reviews, or contact information.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-white/75 p-6">
              <h3 className="font-display text-3xl font-semibold text-pine">Clean Calls To Action</h3>
              <p className="mt-3 text-sm leading-7 text-bark/75">
                Every route gives the visitor an obvious next step without pushing them through clutter.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/services" className="inline-flex rounded-full bg-pine px-6 py-4 text-sm font-semibold text-sand shadow-[0_14px_28px_rgba(0,0,0,0.18)] transition hover:bg-bark">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
