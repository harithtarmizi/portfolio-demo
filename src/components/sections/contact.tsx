import { Download, ExternalLink, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/layout/section";
import { SITE, SOCIAL_LINKS } from "@/constants/site";

export function ContactSection() {
  const linkedIn = SOCIAL_LINKS.find((link) => link.icon === "linkedin");
  const github = SOCIAL_LINKS.find((link) => link.icon === "github");

  return (
    <Section id="contact">
      <SectionHeader
        label="Contact"
        title="Start a conversation"
        description={SITE.availability}
      />

      <FadeIn>
        <div className="max-w-(--width-prose)">
          <Button
            render={
              <a
                href={`mailto:${SITE.email}?subject=Engineering%20conversation`}
              />
            }
            size="lg"
            className="h-12 w-full px-8 sm:w-auto"
          >
            <Mail data-icon="inline-start" />
            Email Harith
          </Button>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {linkedIn && (
              <a
                href={linkedIn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                aria-label={linkedIn.label}
              >
                <LinkedInIcon className="size-4" />
              </a>
            )}
            {github && (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                aria-label={github.label}
              >
                <GitHubIcon className="size-4" />
              </a>
            )}
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="size-4" />
              Download resume
            </a>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
