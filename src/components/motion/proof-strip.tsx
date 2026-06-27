"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import type { ProofMetric } from "@/types";

interface ProofStripProps {
  metrics: ProofMetric[];
}

export function ProofStrip({ metrics }: ProofStripProps) {
  return (
    <FadeIn delay={0.3}>
      <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-border py-6 sm:gap-8 sm:py-8">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <motion.dt
              className="text-2xl font-semibold tracking-tight text-accent sm:text-[1.75rem]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {metric.value}
            </motion.dt>
            <dd className="mt-1 font-mono text-xs text-muted-foreground">
              {metric.label}
            </dd>
          </div>
        ))}
      </dl>
    </FadeIn>
  );
}
