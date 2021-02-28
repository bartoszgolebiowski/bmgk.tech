import * as React from "react";
import { motion } from "framer-motion";

const Transition = ({ children, animate = {}, ...props }) => {
  return (
    <motion.div
      animate={{
        animationDuration: "5s",
        animationFillMode: "both",
        animationTimingFunction: "cubic-bezier(.215,.61,.355,1)",
        opacity: [0, 0.1, 0.3, 0.7, 1],
        ...animate,
      }}
      {...props}
    >
      {React.Children.map(children, (children) => children)}
    </motion.div>
  );
};

export default Transition;
