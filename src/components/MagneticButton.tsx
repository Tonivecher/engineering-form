import {
  useEffect,
  useRef,
  type ButtonHTMLAttributes,
  type PropsWithChildren,
} from "react";
import { useReducedMotion } from "framer-motion";

import { cn } from "../lib/utils";

type MagneticButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export function MagneticButton({
  children,
  className,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const button = buttonRef.current;

    if (!button || typeof window === "undefined" || shouldReduceMotion) {
      return;
    }

    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!finePointerQuery.matches) {
      return;
    }

    let frame = 0;
    let x = 0;
    let y = 0;

    const applyTransform = () => {
      button.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = 0;
    };

    const schedule = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(applyTransform);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = button.getBoundingClientRect();
      const offsetX = event.clientX - (bounds.left + bounds.width / 2);
      const offsetY = event.clientY - (bounds.top + bounds.height / 2);

      x = offsetX * 0.16;
      y = offsetY * 0.16;
      schedule();
    };

    const reset = () => {
      x = 0;
      y = 0;
      schedule();
    };

    button.addEventListener("pointermove", handlePointerMove);
    button.addEventListener("pointerleave", reset);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      button.style.transform = "";
      button.removeEventListener("pointermove", handlePointerMove);
      button.removeEventListener("pointerleave", reset);
    };
  }, [shouldReduceMotion]);

  return (
    <button
      ref={buttonRef}
      className={cn(
        "inline-flex min-h-[3.25rem] items-center gap-3 rounded-md bg-white px-6 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-black transition-[transform,background-color,color] duration-300 ease-editorial hover:bg-white/86 disabled:pointer-events-none disabled:opacity-45",
        className,
      )}
      data-cursor="interactive"
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
