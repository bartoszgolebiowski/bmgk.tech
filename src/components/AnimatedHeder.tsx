import * as React from "react";
import { isValidMotionProp, motion } from "framer-motion";
import { CAROUSEL_TIME } from "../utils/hooks/useNumberCarousel";
import { chakra } from "@chakra-ui/react";

const ONE_SECOND = 1000;

const MotionSpan = motion.custom(
  React.forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    //@ts-ignore
    return <chakra.span ref={ref} {...chakraProps} />;
  })
);

const AnimatedHeder = (props) => {
  const [key, setKey] = React.useState(Math.random() + "");

  React.useEffect(() => {
    setKey(Math.random() + "");
  }, [props]);

  return (
    <MotionSpan
      key={key}
      wordBreak="break-all"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 1, 0] }}
      transition={{ duration: CAROUSEL_TIME / ONE_SECOND }}
      {...props}
    />
  );
};

export default AnimatedHeder;
