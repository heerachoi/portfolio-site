import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useRef, useState } from "react";
import { marqueeTools } from "../data/skills";
import "./Marquee.css";

const SPEED = 42; // px per second

export default function Marquee() {
  const reduceMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (reduceMotion || paused || !trackRef.current) return;

    const half = trackRef.current.scrollWidth / 2;
    if (half <= 0) return;

    let next = x.get() - (delta / 1000) * SPEED;
    if (next <= -half) next += half;
    x.set(next);
  });

  const track = [...marqueeTools, ...marqueeTools];

  return (
    <div
      className="marquee"
      aria-hidden="true"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        ref={trackRef}
        className="marquee__track"
        style={reduceMotion ? undefined : { x }}
      >
        {track.map((tool, i) => (
          <motion.span
            className="marquee__item"
            key={`${tool}-${i}`}
            whileHover={
              reduceMotion
                ? undefined
                : { color: "var(--ink)", transition: { duration: 0.2 } }
            }
          >
            {tool}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
