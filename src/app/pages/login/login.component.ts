// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CustomSnackbarService } from 'src/app/shared/custom-snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loading = false;
  username = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private snackbarService: CustomSnackbarService
  ) {}

login() {
  this.loading = true;

  this.auth.login({ username: this.username, password: this.password })
    .pipe(finalize(() => this.loading = false))
    .subscribe({
      next: (res: { access_token: string }) => {
        localStorage.setItem('auth_token', res.access_token);
        this.router.navigate(['/home']);
        this.snackbarService.open('Logged in successfully!', 'success');
      },
      error: (err) => {
        if (err.status === 0) {
          // Network error / CORS / server unreachable
          this.snackbarService.open('Unable to connect. Please check your internet connection or try again later.', 'error');
        } else if (err.status === 401) {
          this.snackbarService.open('Invalid username or password.', 'error');
        } else {
          this.snackbarService.open('Login failed! Please try again.', 'error');
        }
      }
    });
}

}
