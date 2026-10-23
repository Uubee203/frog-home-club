import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, intro, image, imageAlt, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={image}
        alt={imageAlt}
        width={1600}
        height={1072}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="bg-hero-overlay absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="max-w-2xl animate-rise">
          <p className="eyebrow text-lime">{eyebrow}</p>
          <h1 className="mt-4 whitespace-pre-line text-6xl text-on-dark sm:text-7xl md:text-8xl">{title}</h1>
          <p className="mt-6 text-lg text-on-dark-muted sm:text-xl">{intro}</p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
