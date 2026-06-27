import { ABOUT_PARAGRAPHS } from "@/constants/content";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";

export function AboutSection() {
  return (
    <Section id="about" className="border-t border-border py-16 md:py-24">
      <div className="max-w-(--width-prose) space-y-5">
        {ABOUT_PARAGRAPHS.map((paragraph, index) => (
          <FadeIn key={index} delay={index * 0.08}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              {paragraph}
            </p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
