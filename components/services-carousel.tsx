"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/Land1.jpg", alt: "Landscaping project one" },
  { src: "/images/Land2.jpg", alt: "Landscaping project two" },
  { src: "/images/Land3.jpg", alt: "Landscaping project three" },
  { src: "/images/Land4.jpg", alt: "Landscaping project four" },
  { src: "/images/Land6.jpg", alt: "Landscaping project five" },
];

export function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  const activeSlide = slides[activeIndex];

  return (
    <section className="section-shell pt-16">
      <div className="rounded-[2.25rem] border border-sand/10 bg-sand/95 p-6 shadow-[0_24px_50px_rgba(0,0,0,0.18)] lg:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-pine/10 bg-pine/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-pine">
              Project Gallery
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-pine">
              Our work speaks for itself.
            </h2>
            <p className="mt-3 text-base leading-7 text-bark/75">
              A cleaner look at completed outdoor work.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-pine/15 px-4 py-3 text-sm font-semibold text-pine transition hover:border-pine/35 hover:bg-pine/5"
              aria-label="Previous slide"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-full bg-pine px-4 py-3 text-sm font-semibold text-sand shadow-[0_12px_24px_rgba(41,68,54,0.18)] transition hover:bg-bark"
              aria-label="Next slide"
            >
              Next
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[2rem] bg-white/50">
          <div className="relative aspect-[16/10] w-full">
            <Image
              key={activeSlide.src}
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {slides.map((slide, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`overflow-hidden rounded-[1.35rem] border transition ${
                  active
                    ? "border-pine shadow-[0_14px_30px_rgba(41,68,54,0.18)]"
                    : "border-pine/10 opacity-80 hover:opacity-100"
                }`}
                aria-label={`View slide ${index + 1}`}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(min-width: 1024px) 180px, 33vw"
                    className="object-cover"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
