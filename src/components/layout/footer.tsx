import { SITE } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-(--width-layout) px-5 py-10 md:px-6 md:py-12">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {SITE.fullName} · Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-opacity hover:opacity-70"
          >
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
}
