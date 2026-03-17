import { useEffect, useState } from "react";

interface MousePositionState {
  x: number;
  y: number;
  isFinePointer: boolean;
  isInsideViewport: boolean;
}

export function useMousePosition(): MousePositionState {
  const [state, setState] = useState<MousePositionState>({
    x: 0,
    y: 0,
    isFinePointer: false,
    isInsideViewport: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const updateFinePointer = () => {
      setState((current) => ({
        ...current,
        isFinePointer: finePointerQuery.matches,
      }));
    };

    const commitPosition = () => {
      setState((current) => ({
        ...current,
        x: nextX,
        y: nextY,
        isInsideViewport: true,
      }));
      frame = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      nextX = event.clientX;
      nextY = event.clientY;

      if (!frame) {
        frame = window.requestAnimationFrame(commitPosition);
      }
    };

    const handlePointerLeave = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }

      setState((current) => ({
        ...current,
        isInsideViewport: false,
      }));
    };

    updateFinePointer();
    finePointerQuery.addEventListener("change", updateFinePointer);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      finePointerQuery.removeEventListener("change", updateFinePointer);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
    };
  }, []);

  return state;
}
