"use client";

import { useRef } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { business, navigation } from "@/data/site";
import { cn } from "@/lib/utils";

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
    <header
      ref={headerRef}
      className="z-50 mx-auto mt-2 max-w-6xl rounded-2xl border-b border-transparent px-6 pt-3 lg:px-8 lg:border-pine md:bg-transparent"
    >
      <Disclosure as="nav" className="overflow-hidden bg-transparent shadow-none md:nav-glass">
        <div className="relative flex items-center justify-end px-4 py-2 md:justify-between md:px-4 md:py-3">
          <div className="mr-auto flex items-center gap-3 md:gap-4">
            <Link href="/" className="pb-2 md:pb-0">
            <div className="overflow-hidden rounded-[1.35rem] border border-white/20 bg-sand/90 md:logo-glow">
              <video
                className="h-22 w-36 object-fill md:h-20 md:w-40"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${business.name} logo video`}
              >
                <source src="/videos/groot.mp4" type="video/mp4" />
              </video>
            </div>
            </Link>

            <Link href="/" className="hidden items-center gap-3 md:flex">
              <div>
                <p className="font-display text-2xl font-semibold leading-none text-pine">
                  {business.name}
                </p>
                <p className="text-sm text-bark/70">
                  {business.city}, {business.region}
                </p>
              </div>
            </Link>
          </div>

          <NavigationMenu className="hidden md:flex md:w-auto">
            <NavigationMenuList className="md:flex-row md:items-center md:gap-2">
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <NavigationMenuItem key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle,
                        "md:w-auto md:rounded-full md:px-4 md:py-2",
                        active &&
                          "bg-pine text-sand shadow-[0_8px_24px_rgba(41,68,54,0.28)] hover:bg-pine hover:text-sand",
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                );
              })}
              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className="cta-glow inline-flex bg-pine px-5 py-3 text-center text-sm font-semibold text-sand transition hover:bg-bark md:mt-0 md:rounded-full"
                >
                  <span className="w-full">Call</span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <DisclosureButton className="rounded-full border border-pine/15 p-2.5 text-pine md:hidden">
            <span className="sr-only">Toggle navigation</span>
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          </DisclosureButton>
        </div>

        <DisclosurePanel className="mt-2 rounded-[1.4rem] border border-pine/10 bg-sand/95 px-6 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.12)] md:hidden">
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
