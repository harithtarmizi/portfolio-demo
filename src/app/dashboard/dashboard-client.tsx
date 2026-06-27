"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import { AuthGuard } from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { useAuth } from "@/hooks/use-auth";
import { SITE } from "@/constants/site";

function DashboardContent() {
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border/50">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-70"
          >
            {SITE.name}
          </Link>
          <Button variant="outline" size="sm" onClick={logout}>
            <LogOut data-icon="inline-start" />
            Sign out
          </Button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-24">
        <FadeIn>
          <div className="mb-12">
            <p className="mb-2 text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Dashboard
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Welcome back, {user?.name.split(" ")[0]}.
            </h1>
            <p className="mt-3 text-muted-foreground">
              You&apos;re signed in as {user?.email}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          <FadeIn delay={0.1}>
            <Card className="border-border/50 bg-card/30 ring-border/50">
              <CardHeader>
                <CardTitle>Session</CardTitle>
                <CardDescription>
                  Frontend-only auth stored in localStorage.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="text-foreground">Name:</span> {user?.name}
                </p>
                <p>
                  <span className="text-foreground">Email:</span> {user?.email}
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="border-border/50 bg-card/30 ring-border/50">
              <CardHeader>
                <CardTitle>Quick links</CardTitle>
                <CardDescription>Navigate back to the portfolio.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Link
                  href="/#projects"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  View projects
                </Link>
                <Link
                  href="/#blog"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Read blog
                </Link>
                <Link
                  href="/#contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardContent />
    </AuthGuard>
  );
}
