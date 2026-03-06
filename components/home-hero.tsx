"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { business, stats } from "@/data/site";

gsap.registerPlugin(useGSAP);

export function HomeHero() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;

      const intro = rootRef.current.querySelectorAll("[data-hero-intro]");
      const cards = rootRef.current.querySelectorAll("[data-hero-card]");

      gsap.fromTo(
        intro,
        { autoAlpha: 0, y: 26 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 32, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.18,
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="mx-auto grid max-w-5xl gap-5 xl:max-w-[1080px] xl:grid-cols-[minmax(0,1fr)_320px]">
      <div className="grid gap-4">
        <div className="overflow-hidden rounded-[2.4rem] border border-sand/10 bg-pine px-7 py-8 text-sand shadow-[0_24px_50px_rgba(0,0,0,0.2)] md:px-8 md:py-10 lg:px-10 lg:py-12">
          <span
            data-hero-intro
            className="inline-flex items-center rounded-full border border-sand/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sand"
          >
            Licensed and insured landscape contractor
          </span>
          <h1
            data-hero-intro
            className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-none text-sand md:text-[3.8rem] lg:max-w-[12ch] lg:text-[4.5rem]"
          >
            Landscaping that keeps the yard clean, functional, and easy to love.
          </h1>
          <p data-hero-intro className="mt-6 max-w-2xl text-lg leading-8 text-sand/80">
            4 Corners Landscaping serves West Valley City and nearby Utah communities with new construction landscaping and remodel-focused outdoor projects.
          </p>

          <div data-hero-intro className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-sand px-6 py-4 text-sm font-semibold text-pine shadow-[0_16px_34px_rgba(0,0,0,0.18)] transition hover:bg-white"
            >
              Call Now
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-sand/20 px-6 py-4 text-sm font-semibold text-sand transition hover:border-sand/40 hover:bg-white/5"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div
            data-hero-card
            className="hero-highlight rounded-[1.8rem] bg-sand/95 p-6 text-pine shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-bark/45">Client Signal</p>
            <p className="mt-3 font-display text-4xl font-semibold">5.0 rated</p>
            <p className="mt-2 text-sm leading-7 text-bark/75">
              Trusted by homeowners for communication, pricing, and finished results.
            </p>
          </div>

          {stats.slice(0, 2).map((stat) => (
            <div
              key={stat.label}
              data-hero-card
              className="rounded-3xl border border-sand/10 bg-sand/95 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
            >
              <p className="text-3xl font-bold text-pine">{stat.value}</p>
              <p className="mt-1 text-sm text-bark/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <aside
        data-hero-card
        className="float-card flex flex-col justify-between rounded-[2rem] border border-sand/10 bg-sand/95 p-7 shadow-[0_20px_44px_rgba(0,0,0,0.18)] xl:min-h-[520px]"
      >
        <div>
          <span className="eyebrow">Quick Info</span>
          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.15em] text-bark/50">Address</dt>
              <dd className="mt-2 text-lg font-semibold text-pine">
                {business.addressLines[0]}
                <br />
                {business.addressLines[1]}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.15em] text-bark/50">Areas Served</dt>
              <dd className="mt-2 text-base text-bark/75">{business.areaServed}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.15em] text-bark/50">Hours</dt>
              <dd className="mt-2 text-base text-bark/75">{business.hours}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 rounded-[1.75rem] bg-pine p-6 text-sand">
          <p className="text-sm uppercase tracking-[0.18em] text-sand/70">Best first step</p>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight">
            Call to talk through your yard, timeline, and scope.
          </p>
        </div>

        <div className="relative mt-4 overflow-hidden rounded-[1.75rem] border border-pine/10">
          <video
            className="h-56 w-full object-fill lg:h-40"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/groot.mp4" type="video/mp4" />
          </video>
        </div>
      </aside>
    </div>
  );
}
