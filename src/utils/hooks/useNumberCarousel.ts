import * as React from "react";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

export const CAROUSEL_TIME = 5000;

/**
 * Cycles through numbers 1..length in order and always returns a valid key.
 */
const useNumberCarousel = (length: number) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [current, setCurrent] = React.useState(1);

  React.useEffect(() => {
    if (prefersReducedMotion || length <= 1) {
      return;
    }

    const id = setTimeout(() => {
      setCurrent((value) => (value % length) + 1);
    }, CAROUSEL_TIME);

    return () => clearTimeout(id);
  }, [current, length, prefersReducedMotion]);

  return [current] as const;
};

export default useNumberCarousel;
