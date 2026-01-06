import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const getVariants = (direction: string): Variants => {
  const directions: Record<string, { x?: number; y?: number }> = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export const ScrollFade = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollAnimationProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      variants={getVariants(direction)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: 0.1, delayChildren: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({
  children,
  className = "",
  delay = 0,
}: ScrollAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
