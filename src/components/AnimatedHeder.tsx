import * as React from "react";
import { motion } from "framer-motion";
import { CAROUSEL_TIME } from "../utils/hooks/useNumberCarousel";

const ONE_SECOND = 1000;

const AnimatedHeder = (props) => {
  const [key, setKey] = React.useState(Math.random() + "");

  React.useEffect(() => {
    setKey(Math.random() + "");
  }, [props]);

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 1, 0] }}
      transition={{ duration: CAROUSEL_TIME / ONE_SECOND }}
      {...props}
    />
  );
};

export default AnimatedHeder;
