import { motion } from "framer-motion";

import type { GalleryItem } from "../types/site";

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
}

const spanClassMap: Record<GalleryItem["span"], string> = {
  feature: "md:col-span-2 xl:col-span-7 xl:row-span-4",
  portrait: "xl:col-span-5 xl:row-span-4",
  landscape: "xl:col-span-5 xl:row-span-3",
  square: "xl:col-span-4 xl:row-span-3",
};

const aspectClassMap: Record<GalleryItem["span"], string> = {
  feature: "aspect-[5/4] xl:aspect-auto",
  portrait: "aspect-[3/4] xl:aspect-auto",
  landscape: "aspect-[16/10] xl:aspect-auto",
  square: "aspect-square xl:aspect-auto",
};

const minHeightMap: Record<GalleryItem["span"], string> = {
  feature: "min-h-[28rem]",
  portrait: "min-h-[28rem]",
  landscape: "min-h-[21rem]",
  square: "min-h-[21rem]",
};

export function GalleryCard({ item, index }: GalleryCardProps) {
  return (
    <motion.article
      className={`group relative isolate overflow-hidden ${spanClassMap[item.span]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: Math.min(index * 0.07, 0.28),
        ease: [0.22, 1, 0.36, 1],
      }}
      data-cursor="interactive"
    >
      <div
        className={`relative h-full w-full overflow-hidden bg-graphite ${aspectClassMap[item.span]} ${minHeightMap[item.span]}`}
      >
        <img
          src={item.image}
          alt={item.alt}
          className="image-monochrome h-full w-full object-cover transition duration-700 ease-editorial group-hover:scale-[1.05] group-hover:brightness-[0.92]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0)_15%,rgba(5,5,5,0.18)_42%,rgba(5,5,5,0.9)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
          <p className="section-kicker">{item.category}</p>
          <h3 className="mt-4 max-w-[13ch] font-display text-[clamp(1.7rem,3.2vw,3.2rem)] leading-[0.98] tracking-display">
            {item.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/64 md:text-base md:leading-8">
            {item.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
