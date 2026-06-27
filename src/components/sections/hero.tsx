"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, TextReveal } from "@/components/motion/fade-in";
import { ProofStrip } from "@/components/motion/proof-strip";
import { HERO_PROOF, SITE } from "@/constants/site";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center">
      <div className="mx-auto w-full max-w-(--width-layout) px-5 pt-28 pb-16 md:px-6 md:pt-36 md:pb-24">
        <FadeIn delay={0}>
          <p className="mb-5 font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
            {SITE.title}
          </p>
        </FadeIn>

        <h1 className="max-w-3xl text-[2rem] font-semibold tracking-tight text-balance text-foreground sm:text-5xl md:text-[3.5rem] md:leading-[1.1]">
          <TextReveal
            text={`${SITE.fullName} builds systems that survive production.`}
          />
        </h1>

        <FadeIn delay={0.15}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-6 md:text-xl md:leading-relaxed">
            Backend architecture, platform engineering, and reliability — from
            first commit to on-call at 2 AM.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 font-mono text-sm text-muted-foreground/80">
            {SITE.identity}
          </p>
        </FadeIn>

        <ProofStrip metrics={HERO_PROOF} />

        <FadeIn delay={0.35}>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              render={<Link href="#work" />}
              size="lg"
              className="h-11 w-full px-6 sm:w-auto"
            >
              View selected work
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              render={
                <a
                  href={`mailto:${SITE.email}?subject=Engineering%20conversation`}
                />
              }
              variant="outline"
              size="lg"
              className="h-11 w-full px-6 sm:w-auto"
            >
              {SITE.email}
            </Button>
            <Button
              render={
                <a
                  href={SITE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="ghost"
              size="lg"
              className="h-11 w-full px-6 text-muted-foreground sm:w-auto"
            >
              <Download data-icon="inline-start" />
              Resume
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
