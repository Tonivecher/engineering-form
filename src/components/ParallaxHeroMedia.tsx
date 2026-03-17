import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxHeroMediaProps {
  image: string;
}

export function ParallaxHeroMedia({ image }: ParallaxHeroMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={image}
        alt=""
        aria-hidden="true"
        className="image-monochrome h-full w-full object-cover object-center"
        style={shouldReduceMotion ? undefined : { y, scale }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.18)_0%,rgba(5,5,5,0.52)_40%,rgba(5,5,5,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,241,235,0.08),transparent_22%)]" />
    </div>
  );
}
