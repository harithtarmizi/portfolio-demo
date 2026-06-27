import { ABOUT_PARAGRAPHS } from "@/constants/content";
import { FadeIn } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/layout/section";

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeader
        label="About"
        title="Engineering is how I think"
        description="I build systems that work under pressure — not demos that look good in a screenshot."
      />

      <div className="space-y-6">
        {ABOUT_PARAGRAPHS.map((paragraph, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
