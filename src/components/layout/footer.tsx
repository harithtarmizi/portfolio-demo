import { SITE } from "@/constants/site";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Designed and developed by {SITE.fullName}.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with{" "}
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
        <Separator className="my-8 opacity-50" />
        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
