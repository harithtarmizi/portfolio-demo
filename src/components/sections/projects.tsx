import {
  getFeaturedProjects,
  getSecondaryProjects,
} from "@/constants/content";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import {
  ProjectCardCompact,
  ProjectCardFeatured,
} from "@/components/projects/project-card";
import { Section, SectionHeader } from "@/components/layout/section";

export function ProjectsSection() {
  const featured = getFeaturedProjects();
  const secondary = getSecondaryProjects();

  return (
    <Section id="work">
      <SectionHeader
        label="Selected Work"
        title="Systems in production"
        description="Case studies from event pipelines, developer platforms, and observability tooling."
      />

      <StaggerContainer className="grid gap-6 md:grid-cols-2">
        {featured.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCardFeatured project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {secondary.length > 0 && (
        <div className="mt-6 space-y-3">
          {secondary.map((project) => (
            <ProjectCardCompact key={project.slug} project={project} />
          ))}
        </div>
      )}
    </Section>
  );
}
