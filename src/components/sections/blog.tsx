import { BLOG_POSTS } from "@/constants/content";
import { StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Section, SectionHeader } from "@/components/layout/section";

export function BlogSection() {
  return (
    <Section id="blog">
      <SectionHeader
        label="Blog"
        title="Writing on engineering"
        description="Thoughts on system design, reliability, and building software that lasts."
      />

      <StaggerContainer className="grid gap-4 sm:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <StaggerItem key={post.slug}>
            <article className="group flex h-full flex-col rounded-xl border border-border/50 bg-card/20 p-6 transition-colors hover:border-border hover:bg-card/40">
              <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground">
                <time dateTime={post.date}>{post.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/80">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <span className="mt-4 text-sm text-muted-foreground/60">
                Coming soon
              </span>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
