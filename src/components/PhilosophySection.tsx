import {
  atmosphereImage,
  materialFeatures,
  philosophyCopy,
} from "../data/siteContent";
import { SectionReveal } from "./SectionReveal";

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="section-rule py-[var(--section-space)]"
    >
      <div className="page-grid grid grid-cols-12 gap-y-14 lg:gap-x-10">
        <SectionReveal className="col-span-12 lg:col-span-5">
          <p className="section-kicker">Материалы и философия</p>
          <h2 className="section-title max-w-[11ch]">
            Мебель как продолжение архитектуры.
          </h2>
          <div className="mt-8 space-y-6">
            {philosophyCopy.map((paragraph) => (
              <p key={paragraph} className="section-copy max-w-xl">
                {paragraph}
              </p>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="col-span-12 lg:col-span-7" delay={0.08}>
          <div className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
            <div className="overflow-hidden bg-graphite">
              <img
                src={materialFeatures[0].image}
                alt={materialFeatures[0].alt}
                className="image-monochrome h-full min-h-[26rem] w-full object-cover transition duration-700 ease-editorial hover:scale-[1.03]"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <div className="overflow-hidden bg-graphite">
                <img
                  src={materialFeatures[1].image}
                  alt={materialFeatures[1].alt}
                  className="image-monochrome h-full min-h-[12rem] w-full object-cover transition duration-700 ease-editorial hover:scale-[1.03]"
                />
              </div>
              <div className="overflow-hidden bg-graphite">
                <img
                  src={atmosphereImage.src}
                  alt={atmosphereImage.alt}
                  className="image-monochrome h-full min-h-[12rem] w-full object-cover transition duration-700 ease-editorial hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </SectionReveal>

        <div className="col-span-12 grid gap-10 lg:grid-cols-3">
          {materialFeatures.map((feature, index) => (
            <SectionReveal
              key={feature.title}
              delay={0.08 * index}
              className="border-t border-white/10 pt-6"
            >
              <p className="section-kicker">{feature.eyebrow}</p>
              <h3 className="mt-5 max-w-[14ch] font-display text-[clamp(1.7rem,3vw,2.6rem)] leading-[1] tracking-display">
                {feature.title}
              </h3>
              <p className="mt-5 max-w-md text-base leading-8 text-white/64">
                {feature.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
