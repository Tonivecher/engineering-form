import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { heroImage, heroMetrics } from "../data/siteContent";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { MagneticButton } from "./MagneticButton";
import { ParallaxHeroMedia } from "./ParallaxHeroMedia";
import { SectionReveal } from "./SectionReveal";

export function HeroSection() {
  const { scrollTo } = useSmoothScroll();

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-10 pt-28 md:pt-32">
      <ParallaxHeroMedia image={heroImage} />

      <div className="page-grid relative z-10 grid min-h-[calc(100vh-7rem)] grid-cols-12 gap-y-10">
        <SectionReveal className="col-span-12 self-end lg:col-span-8">
          <p className="section-kicker">Архитектурная чистота</p>
          <h1 className="mt-6 max-w-[7ch] font-display text-[clamp(4rem,12vw,10rem)] leading-[0.86] tracking-display">
            Инженерия формы
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-2xl md:leading-10">
            Премиальное мебельное производство для архитекторов, дизайнеров и
            пространств, где качество считывается в пропорции, материале и
            точности исполнения.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <MagneticButton
              type="button"
              onClick={() => scrollTo("#contact", { offset: -72 })}
            >
              Запросить бриф
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
            </MagneticButton>
            <button
              type="button"
              onClick={() => scrollTo("#gallery", { offset: -48 })}
              className="section-link"
              data-cursor="interactive"
            >
              Смотреть объекты
              <ArrowDownRight className="h-4 w-4" strokeWidth={1.6} />
            </button>
          </div>
        </SectionReveal>

        <SectionReveal
          className="col-span-12 self-end lg:col-span-4 lg:pl-8 xl:pl-12"
          delay={0.08}
          y={24}
        >
          <p className="max-w-md text-sm uppercase tracking-[0.28em] text-white/40">
            Чистые плоскости. Спокойный ритм. Материал без декоративного
            шума. Производственная дисциплина на каждом узле.
          </p>
        </SectionReveal>

        <div className="col-span-12 section-rule pt-6 md:pt-8">
          <div className="grid gap-6 md:grid-cols-3">
            {heroMetrics.map((metric, index) => (
              <SectionReveal key={metric.value} delay={0.08 * index} y={20}>
                <p className="text-sm uppercase tracking-[0.3em] text-white/42">
                  {metric.value}
                </p>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/64">
                  {metric.label}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
