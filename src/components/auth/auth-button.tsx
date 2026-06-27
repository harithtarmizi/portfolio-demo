"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

export function AuthButton() {
  const { user, isLoading, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  if (isLoading) return null;

  if (isAuthenticated && user) {
    return (
      <div className="hidden items-center gap-3 md:flex">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <User className="size-3.5" />
          {user.name.split(" ")[0]}
        </Link>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            logout();
            router.push("/");
          }}
          className="text-muted-foreground"
        >
          <LogOut className="size-3.5" />
          Sign out
        </Button>
      </div>
    );
  }

  return (
    <Button
      render={<Link href="/login" />}
      variant="outline"
      size="sm"
      className="hidden md:inline-flex"
    >
      Sign in
    </Button>
  );
}

export function MobileAuthLinks({ onNavigate }: { onNavigate: () => void }) {
  const { user, isLoading, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  if (isLoading) return null;

  if (isAuthenticated && user) {
    return (
      <>
        <Link
          href="/dashboard"
          className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          onClick={onNavigate}
        >
          Dashboard
        </Link>
        <button
          type="button"
          className="rounded-md px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          onClick={() => {
            logout();
            onNavigate();
            router.push("/");
          }}
        >
          Sign out
        </button>
      </>
    );
  }

  return (
    <Link
      href="/login"
      className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      onClick={onNavigate}
    >
      Sign in
    </Link>
  );
}
