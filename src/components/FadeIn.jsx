import { motion } from "framer-motion";
import { fadeUp } from "../motion";

/** Scroll-triggered fade-up used across section intros */
export default function FadeIn({ as = "div", children, className, delay = 0, ...rest }) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}
