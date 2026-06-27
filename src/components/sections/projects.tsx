import { ExternalLink, GitBranch } from "lucide-react";
import { PROJECTS } from "@/constants/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/layout/section";
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

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeader
        label="Projects"
        title="Featured work"
        description="Systems I've designed, built, and operated in production."
      />

      <StaggerContainer className="space-y-8">
        {PROJECTS.map((project) => (
          <StaggerItem key={project.name}>
            <article className="group rounded-2xl border border-border/50 bg-card/20 p-8 transition-colors hover:border-border hover:bg-card/40 md:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <Badge variant={statusVariant[project.status]}>
                  {project.status}
                </Badge>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div>
                  <h4 className="mb-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                    Architecture
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.architecture}
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                    Challenges
                  </h4>
                  <ul className="space-y-1.5">
                    {project.challenges.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                    Solutions
                  </h4>
                  <ul className="space-y-1.5">
                    {project.solutions.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  render={
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  variant="outline"
                  size="sm"
                >
                  <GitBranch data-icon="inline-start" />
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
                    size="sm"
                  >
                    <ExternalLink data-icon="inline-start" />
                    Live Demo
                  </Button>
                )}
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
