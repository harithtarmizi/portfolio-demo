"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function AuthGuard({ children, fallback }: AuthGuardProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      fallback ?? (
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="size-5 animate-spin rounded-full border-2 border-muted-foreground/20 border-t-foreground" />
        </div>
      )
    );
  }

  if (!isAuthenticated) return null;

  return <>{children}</>;
}
