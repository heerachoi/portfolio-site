/** Shared Framer Motion tokens */
export const easeOut = [0.22, 1, 0.36, 1];

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: easeOut },
};
