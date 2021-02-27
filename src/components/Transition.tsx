import * as React from "react";
import { useInView } from "react-intersection-observer";
import { Animated } from "react-animated-css";

export const rightAnimation = {
  animationIn: "bounceInRight",
  animationOut: "fadeOut",
};

const Transition = ({ children, ...props }) => {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  React.useEffect(() => {
    if (inView === true && visible === false) {
      setVisible(true);
    }
  }, [inView, visible]);

  return (
    <div ref={ref}>
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        {...props}
        isVisible={visible}
      >
        {React.Children.map(children, (children) => children)}
      </Animated>
    </div>
  );
};

export default Transition;
