import * as React from "react";

const MOBILE_WIDTH = 1000;

const useMobileView = () => {
  const [state, setState] = React.useState(false);

  React.useEffect(() => {
    const setResponsiveness = () => {
      setState(window.innerWidth < MOBILE_WIDTH);
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return [state];
};

export default useMobileView;
