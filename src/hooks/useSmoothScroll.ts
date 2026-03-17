import { useContext } from "react";

import { SmoothScrollContext } from "./smooth-scroll-context";

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
