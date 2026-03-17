import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems, studioName } from "../data/siteContent";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { MagneticButton } from "./MagneticButton";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
        isScrolled ? "bg-black/76 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="page-grid grid grid-cols-12 items-center gap-4 py-5">
        <button
          type="button"
          onClick={() => scrollTo(0, { immediate: true })}
          className="col-span-8 flex min-w-0 flex-col items-start text-left md:col-span-4"
          aria-label="Вернуться к началу страницы"
          data-cursor="interactive"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.42em] text-white/40">
            premium furniture atelier
          </span>
          <span className="mt-2 truncate font-display text-xl tracking-[-0.06em] text-white md:text-2xl">
            {studioName}
          </span>
        </button>

        <nav className="col-span-4 hidden items-center justify-center gap-8 md:col-span-5 md:flex xl:gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(`#${item.id}`, { offset: -80 })}
              className="relative text-[0.72rem] uppercase tracking-[0.34em] text-white/54 transition duration-300 ease-editorial hover:text-white"
              data-cursor="interactive"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="col-span-4 flex justify-end md:col-span-3">
          <MagneticButton
            type="button"
            onClick={() => scrollTo("#contact", { offset: -72 })}
            className="px-4 md:px-6"
          >
            Обсудить
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
