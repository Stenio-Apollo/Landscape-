import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  const inverted = eyebrow === "Services" || eyebrow === "About";
  const renderAction = (href: string, label: string, variant: "primary" | "secondary") => {
    const className =
      inverted
        ? variant === "primary"
          ? "rounded-full bg-sand px-6 py-4 text-sm font-semibold text-pine shadow-[0_16px_34px_rgba(0,0,0,0.18)] transition hover:bg-white"
          : "rounded-full border border-sand/20 px-6 py-4 text-sm font-semibold text-sand transition hover:border-sand/40 hover:bg-white/5"
        : variant === "primary"
          ? "cta-glow rounded-full bg-pine px-6 py-4 text-sm font-semibold text-sand transition hover:bg-bark"
          : "rounded-full border border-pine/15 px-6 py-4 text-sm font-semibold text-pine transition hover:border-pine/40 hover:bg-pine/5";
    const isInternalRoute = href.startsWith("/");

    if (isInternalRoute) {
      return (
        <Link href={href} className={className}>
          {label}
        </Link>
      );
    }

    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  };

  return (
    <section className="section-shell pt-10">
      <div
        className={`overflow-hidden rounded-[2.4rem] px-8 py-10 lg:px-12 lg:py-14 ${
          inverted
            ? "border border-sand/10 bg-pine text-sand shadow-[0_24px_50px_rgba(0,0,0,0.2)]"
            : "hero-panel border border-white/60 shadow-soft"
        }`}
      >
        <span className={inverted ? "inline-flex items-center rounded-full border border-sand/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sand" : "eyebrow"}>
          {eyebrow}
        </span>
        <h1 className={`mt-6 max-w-4xl font-display text-5xl font-semibold leading-none sm:text-6xl ${inverted ? "text-sand" : "text-pine"}`}>
          {title}
        </h1>
        <p className={`mt-6 max-w-2xl text-lg leading-8 ${inverted ? "text-sand/80" : "text-bark/75"}`}>{description}</p>
        {(primaryHref || secondaryHref) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryHref && primaryLabel ? (
              renderAction(primaryHref, primaryLabel, "primary")
            ) : null}
            {secondaryHref && secondaryLabel ? (
              renderAction(secondaryHref, secondaryLabel, "secondary")
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
