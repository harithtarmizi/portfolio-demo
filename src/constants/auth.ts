import { SITE } from "@/constants/site";

/** Frontend-only demo credentials — not secure, for UI demo purposes. */
export const DEMO_CREDENTIALS = {
  email: SITE.email,
  password: process.env.NEXT_PUBLIC_AUTH_PASSWORD ?? "demo123",
  name: SITE.fullName,
} as const;

export const AUTH_STORAGE_KEY = "portfolio-auth-session";
