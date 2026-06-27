import { DEMO_CREDENTIALS } from "@/constants/auth";
import type { AuthSession, LoginCredentials, User } from "@/types/auth";

export function validateCredentials({
  email,
  password,
}: LoginCredentials): User | null {
  const normalizedEmail = email.trim().toLowerCase();

  if (
    normalizedEmail === DEMO_CREDENTIALS.email.toLowerCase() &&
    password === DEMO_CREDENTIALS.password
  ) {
    return {
      email: DEMO_CREDENTIALS.email,
      name: DEMO_CREDENTIALS.name,
    };
  }

  return null;
}

export function createSession(user: User): AuthSession {
  return {
    user,
    loggedInAt: new Date().toISOString(),
  };
}

export function parseSession(raw: string): AuthSession | null {
  try {
    const session = JSON.parse(raw) as AuthSession;
    if (!session?.user?.email || !session?.user?.name) return null;
    return session;
  } catch {
    return null;
  }
}
