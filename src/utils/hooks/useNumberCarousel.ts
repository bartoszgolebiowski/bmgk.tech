import * as React from "react";

export const CAROUSEL_TIME = 5000;

const useNumberCauousel = (length: number) => {
  const [current, setCurrent] = React.useState(1);

  React.useEffect(() => {
    const next = (current + 1) % length;
    const id = setTimeout(() => setCurrent(next + 1), CAROUSEL_TIME);
    return () => clearTimeout(id);
  }, [current, length]);

  return [current];
};

export default useNumberCauousel;
