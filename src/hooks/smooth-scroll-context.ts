import { createContext } from "react";

export type ScrollTarget = number | string | HTMLElement;

export interface ScrollToOptions {
  duration?: number;
  immediate?: boolean;
  offset?: number;
}

export interface SmoothScrollContextValue {
  scrollTo: (target: ScrollTarget, options?: ScrollToOptions) => void;
}

const noop = () => undefined;

export const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollTo: noop,
});
