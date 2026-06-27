import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border/50">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-6">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-70"
          >
            {SITE.name}
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <Suspense
          fallback={
            <div className="size-5 animate-spin rounded-full border-2 border-muted-foreground/20 border-t-foreground" />
          }
        >
          <LoginForm />
        </Suspense>
      </main>
    </div>
  );
}
