import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-card"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-transparent to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-accent/80" />
          <span className="size-2 rounded-full bg-muted-foreground/30" />
          <span className="size-2 rounded-full bg-muted-foreground/30" />
        </div>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          {project.techStack.slice(0, 4).join(" · ")}
        </p>
        <p className="mt-1 font-mono text-[10px] text-muted-foreground/60 uppercase">
          {project.slug} — architecture
        </p>
      </div>
    </div>
  );
}

export function ProjectCardFeatured({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-card/30 transition-all duration-150 hover:-translate-y-px hover:border-foreground/20 hover:bg-card/50"
    >
      <div className="p-5 pb-0 md:p-6 md:pb-0">
        <ProjectVisual project={project} />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex items-center gap-3">
          <Badge variant={statusVariant[project.status]}>
            {project.status}
          </Badge>
          <span className="font-mono text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
          {project.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded border border-border/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm text-muted-foreground transition-colors group-hover:text-accent">
          Read case study
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function ProjectCardCompact({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex items-center justify-between gap-4 rounded-lg border border-border/60 bg-card/20 px-5 py-4 transition-all duration-150 hover:border-foreground/20 hover:bg-card/40 md:px-6"
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-medium text-foreground transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          <Badge variant={statusVariant[project.status]} className="text-[10px]">
            {project.status}
          </Badge>
        </div>
        <p className="mt-1 truncate text-sm text-muted-foreground">
          {project.tagline}
        </p>
      </div>
      <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
    </Link>
  );
}
