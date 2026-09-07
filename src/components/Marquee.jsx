import { motion, useReducedMotion } from "framer-motion";
import "./Marquee.css";

const TOOLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Firebase",
  "Redux",
  "Vercel",
  "Java",
  "Git",
  "Adobe XD",
  "Illustrator",
];

export default function Marquee() {
  const reduceMotion = useReducedMotion();
  const track = [...TOOLS, ...TOOLS];

  return (
    <div className="marquee" aria-hidden="true">
      <motion.div
        className="marquee__track"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 28, ease: "linear", repeat: Infinity }
        }
      >
        {track.map((tool, i) => (
          <span className="marquee__item" key={`${tool}-${i}`}>
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
