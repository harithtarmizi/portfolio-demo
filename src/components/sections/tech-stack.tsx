import { TECH_CATEGORIES } from "@/constants/content";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/layout/section";

export function TechStackSection() {
  return (
    <Section id="stack">
      <SectionHeader
        label="Tech Stack"
        title="Tools I work with daily"
        description="Technologies across the stack — from application code to production infrastructure."
      />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TECH_CATEGORIES.map((category) => (
          <StaggerItem key={category.title}>
            <div className="group h-full rounded-xl border border-border/50 bg-card/30 p-6 transition-colors hover:border-border hover:bg-card/50">
              <h3 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border/40 bg-background/50 px-3 py-1.5 text-sm text-foreground transition-colors group-hover:border-border/60"
                  >
                    {item}
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
