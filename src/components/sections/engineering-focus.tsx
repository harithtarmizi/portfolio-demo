import { ENGINEERING_DOMAINS } from "@/constants/content";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/layout/section";

export function EngineeringFocusSection() {
  return (
    <Section id="focus">
      <SectionHeader
        label="Focus"
        title="What I engineer"
        description="Domains where I operate end-to-end — from design docs to production metrics."
      />

      <StaggerContainer className="grid gap-6 md:grid-cols-3">
        {ENGINEERING_DOMAINS.map((domain) => (
          <StaggerItem key={domain.title}>
            <div className="h-full rounded-xl border border-border bg-card/30 p-6 transition-colors duration-150 hover:border-foreground/20 hover:bg-card/50">
              <h3 className="text-lg font-medium text-foreground">
                {domain.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {domain.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {domain.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded border border-border/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
