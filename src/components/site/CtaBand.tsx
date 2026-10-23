import mascot from "@/assets/frog-home-club-mascot.png.asset.json";
import { CallTextButtons } from "./CallTextButtons";
import { PHONE_DISPLAY } from "@/lib/site";

type Props = {
  title: string;
  body?: string;
  callLabel?: string;
  textLabel?: string;
};

export function CtaBand({ title, body, callLabel, textLabel }: Props) {
  return (
    <section className="relative overflow-hidden bg-forest-gradient">
      <div className="mow-stripes absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:py-20">
        <div>
          <p className="eyebrow text-lime">Call or Text {PHONE_DISPLAY}</p>
          <h2 className="mt-3 text-6xl text-on-dark sm:text-7xl md:text-8xl">{title}</h2>
          {body && <p className="mt-4 max-w-xl text-lg text-on-dark-muted">{body}</p>}
          <CallTextButtons
            className="mt-8"
            callLabel={callLabel ?? `Call ${PHONE_DISPLAY}`}
            textLabel={textLabel ?? `Text ${PHONE_DISPLAY}`}
          />
        </div>
        <img
          src={mascot.url}
          alt=""
          width={376}
          height={320}
          loading="lazy"
          className="mx-auto hidden w-72 drop-shadow-2xl md:block lg:w-80"
        />
      </div>
    </section>
  );
}
