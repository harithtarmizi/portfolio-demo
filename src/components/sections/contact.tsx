import { AtSign, GitBranch, Mail, Users } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/site";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/layout/section";
import type { SocialLink } from "@/types";

const iconMap = {
  github: GitBranch,
  linkedin: Users,
  twitter: AtSign,
  email: Mail,
} as const;

function SocialCard({ link }: { link: SocialLink }) {
  const Icon = iconMap[link.icon];

  return (
    <a
      href={link.href}
      target={link.icon === "email" ? undefined : "_blank"}
      rel={link.icon === "email" ? undefined : "noopener noreferrer"}
      className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/20 p-5 transition-colors hover:border-border hover:bg-card/40"
    >
      <div className="flex size-10 items-center justify-center rounded-lg border border-border/40 bg-background/50 transition-colors group-hover:border-border/60">
        <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{link.label}</p>
        <p className="text-xs text-muted-foreground">
          {link.icon === "email"
            ? link.href.replace("mailto:", "")
            : link.href.replace(/^https?:\/\/(www\.)?/, "")}
        </p>
      </div>
    </a>
  );
}

export function ContactSection() {
  return (
    <Section id="contact">
      <SectionHeader
        label="Contact"
        title="Let's connect"
        description="Open to conversations about engineering, infrastructure, and building products."
      />

      <FadeIn>
        <StaggerContainer className="grid gap-4 sm:grid-cols-2">
          {SOCIAL_LINKS.map((link) => (
            <StaggerItem key={link.label}>
              <SocialCard link={link} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </FadeIn>
    </Section>
  );
}
