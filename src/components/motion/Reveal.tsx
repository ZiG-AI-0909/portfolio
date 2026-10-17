import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const delayed: Variants = {
  hidden: item.hidden,
  show: (delay: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, ease, delay } }),
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Fades and lifts a block into place the first time it scrolls into view. */
export const Reveal = ({ children, className, delay = 0 }: RevealProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "0px 0px -60px 0px" }}
    variants={delayed}
    custom={delay}
  >
    {children}
  </motion.div>
);

interface StaggerProps {
  children: ReactNode;
  className?: string;
  gap?: number;
}

/** Staggers its direct StaggerItem children as the group scrolls into view. */
export const Stagger = ({ children, className, gap = 0.08 }: StaggerProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "0px 0px -60px 0px" }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div className={className} variants={item}>
    {children}
  </motion.div>
);
