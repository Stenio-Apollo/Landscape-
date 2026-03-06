"use client";

import { useRef } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business, navigation } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;

      gsap.fromTo(
        headerRef.current,
        { autoAlpha: 0, y: -18 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
      );
    },
    { scope: headerRef, dependencies: [pathname] },
  );

  return (
    <header ref={headerRef} className="sticky top-0 z-50 section-shell pt-4 bg-transparent">
      <Disclosure as="nav" className="section-card nav-sheen overflow-hidden">
        <div className="flex items-center justify-between px-3 py-1">
          <Link href="/" className="flex items-center gap-3">
            <div className="logo-glow overflow-hidden rounded-2xl border border-white/20 bg-sand/90">
              <Image
                src="/images/groot.png"
                alt={`${business.name} logo`}
                width={333}
                height={333}
                className="h-20 w-40 object-fill"
                priority
              />
            </div>
            <div>
              <p className="font-display text-2xl font-semibold leading-none text-pine">
                {business.name}
              </p>
              <p className="text-sm text-bark/70">{business.city}, {business.region}</p>
            </div>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-pine text-sand shadow-[0_8px_24px_rgba(41,68,54,0.28)]"
                      : "text-bark/80 hover:bg-pine/6 hover:text-pine"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="cta-glow rounded-full bg-pine px-5 py-3 text-sm font-semibold text-sand transition hover:bg-bark">
              Call
            </Link>
          </div>

          <DisclosureButton className="rounded-full border border-pine/15 p-3 text-pine md:hidden">
            <span className="sr-only">Toggle navigation</span>
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          </DisclosureButton>
        </div>

        <DisclosurePanel className="border-t border-pine/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    active ? "bg-pine text-sand" : "bg-sand/60 text-bark/80"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </header>
  );
}
