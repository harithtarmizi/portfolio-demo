"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RoleRotatorProps {
  roles: readonly string[];
  interval?: number;
}

export function RoleRotator({ roles, interval = 3000 }: RoleRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, interval);
    return () => clearInterval(timer);
  }, [roles.length, interval]);

  return (
    <span className="relative inline-flex h-[1.2em] min-w-[200px] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="absolute left-0 text-muted-foreground"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
