import { EXPERIENCES } from "@/constants/content";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/layout/section";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader
        label="Experience"
        title="Where I've shipped"
        description="Backend systems, platform tooling, and reliability work across three companies."
      />

      <div className="relative">
        <div
          className="absolute top-0 left-[7px] h-full w-px bg-border"
          aria-hidden="true"
        />

        <StaggerContainer className="space-y-12">
          {EXPERIENCES.map((exp) => (
            <StaggerItem key={`${exp.company}-${exp.duration}`}>
              <article className="relative pl-8 md:pl-10">
                <div
                  className="absolute top-2 left-0 size-[15px] rounded-full border-2 border-border bg-background"
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <time
                    className="mt-1 font-mono text-xs text-muted-foreground sm:mt-0"
                    dateTime={`${exp.startDate}/${exp.endDate ?? ""}`}
                  >
                    {exp.duration}
                  </time>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/40"
                        aria-hidden="true"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
