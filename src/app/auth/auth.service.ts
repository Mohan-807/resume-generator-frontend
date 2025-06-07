// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = environment.apiBaseUrl;
  private TOKEN_KEY = 'auth_token';
  // loading = false;

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  // this is via promise
  // logout(): Promise<void> {
  //   this.loading = true;

  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       localStorage.removeItem(this.TOKEN_KEY);
  //       this.loading = false;
  //       resolve(); // signal that logout is done
  //     }, 3000);
  //   });
  // }

  // via rxjs behavioral subject
   logout(): void {
    this.loadingSubject.next(true);
    setTimeout(() => {
      localStorage.removeItem(this.TOKEN_KEY);
      this.loadingSubject.next(false);
      this.router.navigate(['/login']);
    }, 3000);
  }

  login(user: { username: string; password: string }) {
    return this.http.post<{ access_token: string }>(`${this.baseUrl}/login`, user).pipe();
  }

  signup(user: { username: string; password: string }) {
    return this.http.post(`${this.baseUrl}/signup`, user).pipe();
  }
}