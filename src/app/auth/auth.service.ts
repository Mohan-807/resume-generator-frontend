import { Injectable } from '@angular/core';

/** Simple credential object */
export interface User {
  username: string;
  password: string;   // plain text for demo - replace in production
}

const USERS_KEY   = 'users';        // array of User objects
const SESSION_KEY = 'sessionUser';  // just the logged-in username

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* ---------- session helpers ---------- */
  isLoggedIn(): boolean               { return !!localStorage.getItem(SESSION_KEY); }
  currentUser(): string | null        { return localStorage.getItem(SESSION_KEY); }
  private startSession(u: string): void { localStorage.setItem(SESSION_KEY, u); }
  logout(): void                      { localStorage.removeItem(SESSION_KEY); }

  /* ---------- user persistence ---------- */
  private loadUsers(): User[] {
    return JSON.parse(localStorage.getItem(USERS_KEY) ?? '[]');
  }
  private saveUsers(users: User[]): void {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  /** Create new account */
  register(user: User): { ok: true } | { ok: false; msg: string } {
    const users = this.loadUsers();
    if (users.some(u => u.username === user.username)) {
      return { ok: false, msg: 'Username already taken' };
    }
    users.push(user);
    this.saveUsers(users);
    return { ok: true };
  }

  /** Validate credentials and start session */
  login(creds: User): { ok: true } | { ok: false; msg: string } {
    const match = this.loadUsers().find(
      u => u.username === creds.username && u.password === creds.password
    );
    if (!match) { return { ok: false, msg: 'Invalid username or password' }; }
    this.startSession(match.username);
    return { ok: true };
  }
}
