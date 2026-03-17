import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { useMousePosition } from "../hooks/useMousePosition";

const transition = {
  type: "spring",
  stiffness: 450,
  damping: 35,
  mass: 0.35,
} as const;

export function CustomCursor() {
  const { x, y, isFinePointer, isInsideViewport } = useMousePosition();
  const shouldReduceMotion = useReducedMotion();
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    if (!isFinePointer || shouldReduceMotion) {
      return;
    }

    const selector =
      "[data-cursor='interactive'], a, button, input, textarea, label";

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        setIsInteractive(false);
        return;
      }

      setIsInteractive(Boolean(target.closest(selector)));
    };

    const reset = () => setIsInteractive(false);

    document.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("blur", reset);
    window.addEventListener("pointerleave", reset);

    return () => {
      document.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("blur", reset);
      window.removeEventListener("pointerleave", reset);
    };
  }, [isFinePointer, shouldReduceMotion]);

  if (!isFinePointer || shouldReduceMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2.5 w-2.5 rounded-full bg-white mix-blend-difference"
        animate={{
          x: x - 5,
          y: y - 5,
          opacity: isInsideViewport ? 1 : 0,
          scale: isInteractive ? 0.3 : 1,
        }}
        transition={transition}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-white/75 mix-blend-difference"
        animate={{
          x: x - (isInteractive ? 28 : 18),
          y: y - (isInteractive ? 28 : 18),
          width: isInteractive ? 56 : 36,
          height: isInteractive ? 56 : 36,
          opacity: isInsideViewport ? 0.95 : 0,
        }}
        transition={transition}
      />
    </>
  );
}
