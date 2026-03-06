import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServicesCarousel } from "@/components/services-carousel";
import { business, services } from "@/data/site";

export const metadata: Metadata = {
  title: `Services | ${business.name}`,
  description:
    "Explore landscaping services from 4 Corners Landscaping in West Valley City, including new construction landscaping, remodels, patios, pathways, and finishing work.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pb-16">
      <PageHero
        eyebrow="Services"
        title="Focused landscaping services that are easy to understand and easy to browse."
        description="The service pages keep the offer clear so homeowners can quickly tell whether the company is the right fit for a new build, a remodel, or a yard upgrade."
        primaryHref="/contact"
        primaryLabel="Request A Call"
      />

      <section className="section-shell pt-16">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="service-card rounded-[2rem] border border-sand/10 bg-sand/95 p-7 shadow-[0_20px_44px_rgba(0,0,0,0.18)]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="inline-flex rounded-full border border-pine/10 bg-pine/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-pine">
                Service {index + 1}
              </div>
              <h2 className="mt-5 font-display text-3xl font-semibold text-pine">{service.title}</h2>
              <p className="mt-4 text-base leading-7 text-bark/75">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ServicesCarousel />
    </main>
  );
}
