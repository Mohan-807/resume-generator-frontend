// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CustomSnackbarService } from '../shared/custom-snackbar.service';
import { finalize } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = environment.apiBaseUrl; // Update if hosted elsewhere
  private TOKEN_KEY = 'auth_token';
  loading = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackbarService: CustomSnackbarService
  ) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

login(user: { username: string; password: string }) {
  return this.http.post<{ access_token: string }>(`${this.baseUrl}/login`, user).pipe();
}


  signup(user: { username: string; password: string }) {
    return this.http.post(`${this.baseUrl}/signup`, user)
      .subscribe({
        next: () => {
          alert('Signup successful! Please login.');
          this.router.navigate(['/login']);
        },
        error: err => {
          alert(err.error.message || 'Signup failed');
        }
      });
  }
}
