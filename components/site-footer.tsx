import Link from "next/link";
import { business, navigation } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="section-shell pt-16">
      <div className="section-card px-8 py-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-start">
          <div>
            <p className="font-display text-3xl font-semibold text-pine">{business.name}</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-bark/70">{business.summary}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/45">Navigate</p>
            <div className="mt-3 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-semibold text-bark/75 transition hover:text-pine">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bark/45">Contact</p>
            <div className="mt-3 space-y-3 text-sm text-bark/75">
              <p>{business.phoneDisplay}</p>
              <p>{business.addressLines[0]}</p>
              <p>{business.addressLines[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
