import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import type { Project } from "@/types";

const statusVariant: Record<
  Project["status"],
  "default" | "secondary" | "outline"
> = {
  Production: "default",
  "Open Source": "secondary",
  "In Development": "outline",
  Archived: "outline",
};

function CaseStudySection({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <FadeIn>
      <section id={id} className="scroll-mt-28">
        <h2 className="mb-4 font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
          {label}
        </h2>
        {children}
      </section>
    </FadeIn>
  );
}

export function CaseStudyLayout({ project }: { project: Project }) {
  return (
    <article>
      <FadeIn>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back to work
        </Link>
      </FadeIn>

      <FadeIn delay={0.05}>
        <header className="mt-8 max-w-(--width-prose)">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge variant={statusVariant[project.status]}>
              {project.status}
            </Badge>
            <span className="font-mono text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {project.tagline}
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div
          className="relative mt-10 aspect-video w-full max-w-(--width-wide) overflow-hidden rounded-xl border border-border bg-card"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <p className="font-mono text-xs text-muted-foreground">
              {project.techStack.join(" · ")}
            </p>
            <p className="mt-1 font-mono text-[10px] text-muted-foreground/60 uppercase">
              System architecture — {project.slug}
            </p>
          </div>
        </div>
      </FadeIn>

      <div className="mt-16 max-w-(--width-prose) space-y-14 md:mt-20">
        <CaseStudySection id="overview" label="Overview">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {project.overview}
          </p>
        </CaseStudySection>

        <CaseStudySection id="impact" label="Impact">
          <dl className="grid gap-6 sm:grid-cols-3">
            {project.impact.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-card/30 p-5"
              >
                <dt className="text-2xl font-semibold tracking-tight text-accent">
                  {item.value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </CaseStudySection>

        <CaseStudySection id="problem" label="The Problem">
          <p className="text-base leading-relaxed text-muted-foreground">
            {project.problem}
          </p>
          <ul className="mt-6 space-y-2">
            {project.challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span
                  className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/40"
                  aria-hidden="true"
                />
                {challenge}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection id="architecture" label="Architecture">
          <p className="text-base leading-relaxed text-muted-foreground">
            {project.architecture}
          </p>
        </CaseStudySection>

        <CaseStudySection id="decisions" label="Key Decisions">
          <div className="space-y-4">
            {project.decisions.map((decision) => (
              <div
                key={decision.decision}
                className="rounded-lg border border-border bg-card/30 p-5"
              >
                <h3 className="font-medium text-foreground">
                  {decision.decision}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="text-foreground/70">Trade-off:</span>{" "}
                  {decision.tradeoff}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="text-foreground/70">Outcome:</span>{" "}
                  {decision.outcome}
                </p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection id="stack" label="Stack">
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border/60 px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection id="lessons" label="Lessons Learned">
          <ul className="space-y-3">
            {project.lessonsLearned.map((lesson) => (
              <li
                key={lesson}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {lesson}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <FadeIn>
          <div className="flex flex-wrap gap-3 border-t border-border pt-10">
            <Button
              render={
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="outline"
            >
              <GitHubIcon className="size-4" data-icon="inline-start" />
              GitHub
            </Button>
            {project.liveUrl && (
              <Button
                render={
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                variant="outline"
              >
                <ExternalLink data-icon="inline-start" />
                Live demo
              </Button>
            )}
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
