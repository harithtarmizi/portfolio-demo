"use client";

import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { RoleRotator } from "@/components/motion/role-rotator";
import { HERO_ROLES, SITE } from "@/constants/site";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center">
      <div className="mx-auto w-full max-w-5xl px-6 pt-32 pb-24">
        <FadeIn delay={0}>
          <p className="mb-6 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            {SITE.title}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.1]">
            Hi, I&apos;m {SITE.name}.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl md:leading-relaxed">
            I build scalable software, cloud infrastructure, and AI-powered
            products.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-4 flex items-center gap-2 text-lg md:text-xl">
            <span className="text-muted-foreground/60">—</span>
            <RoleRotator roles={HERO_ROLES} />
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button render={<Link href="#projects" />} size="lg" className="h-11 px-6">
              View Projects
            </Button>
            <Button
              render={
                <a
                  href={SITE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="outline"
              size="lg"
              className="h-11 px-6"
            >
              <Download data-icon="inline-start" />
              Download Resume
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-24 flex justify-center md:justify-start">
            <Link
              href="#about"
              className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Scroll to about section"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ArrowDown className="size-4 animate-bounce" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
