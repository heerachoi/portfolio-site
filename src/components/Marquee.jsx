import { motion } from "framer-motion";
import "./Marquee.css";

const TOOLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Firebase",
  "Redux",
  "Vercel",
  "Java",
  "Git",
  "Adobe XD",
  "Illustrator",
];

export default function Marquee() {
  const track = [...TOOLS, ...TOOLS];

  return (
    <div className="marquee" aria-hidden="true">
      <motion.div
        className="marquee__track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
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
