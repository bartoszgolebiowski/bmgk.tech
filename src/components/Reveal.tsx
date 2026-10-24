import * as React from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Fades content in the first time it enters the viewport.
 *
 * Content is rendered visible on the server and stays visible when JavaScript
 * is unavailable. Only elements that start below the fold are hidden after
 * hydration, so there is no flash of invisible content.
 */
const Reveal = ({ children, delay = 0, y = 24, className }: RevealProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;

    if (
      !node ||
      typeof IntersectionObserver === "undefined" ||
      (window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    ) {
      return;
    }

    // Elements already on screen should not be hidden at all.
    if (node.getBoundingClientRect().top > window.innerHeight) {
      setHidden(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setHidden(false);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? `translateY(${y}px)` : "none",
        transition: visible
          ? `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`
          : undefined,
        willChange: hidden ? "opacity, transform" : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
