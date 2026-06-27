export interface User {
  email: string;
  name: string;
}

export interface AuthSession {
  user: User;
  loggedInAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
