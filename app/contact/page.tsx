import type { Metadata } from "next";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact ${business.name} | West Valley City Landscaping`,
  description:
    "Contact 4 Corners Landscaping in West Valley City, Utah to discuss a landscaping project, remodel, or estimate.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="The next step should feel simple: call, ask questions, and talk through the job."
        description="The contact page keeps the essentials in one place so homeowners can quickly reach out and move the project forward."
        primaryHref={business.phoneHref}
        primaryLabel={business.phoneDisplay}
      />

      <section className="section-shell pt-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/45">Phone</p>
            <p className="mt-4 text-3xl font-semibold text-pine">{business.phoneDisplay}</p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-bark/45">Address</p>
            <p className="mt-4 text-lg leading-8 text-bark/75">
              {business.addressLines[0]}
              <br />
              {business.addressLines[1]}
            </p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-bark/45">Service Area</p>
            <p className="mt-4 text-lg leading-8 text-bark/75">{business.areaServed}</p>
          </div>

          <div className="section-card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/45">Frequently Asked</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-pine">Helpful details before the call.</h2>
            <div className="mt-8">
              <FaqList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
