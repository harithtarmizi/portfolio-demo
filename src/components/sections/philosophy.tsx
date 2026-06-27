import { PHILOSOPHY_ITEMS } from "@/constants/content";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/layout/section";

export function PhilosophySection() {
  return (
    <Section id="philosophy">
      <SectionHeader
        label="Philosophy"
        title="How I approach engineering"
        description="Principles that guide my decisions — from architecture reviews to production incidents."
      />

      <StaggerContainer className="grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/30 sm:grid-cols-2">
        {PHILOSOPHY_ITEMS.map((item, index) => (
          <StaggerItem key={item.title}>
            <div className="h-full bg-background p-8 transition-colors hover:bg-card/30">
              <span className="font-mono text-xs text-muted-foreground/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
