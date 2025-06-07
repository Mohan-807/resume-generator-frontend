import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { CustomSnackbarService } from 'src/app/shared/custom-snackbar.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  loading = false;
  username = '';
  password = '';
  confirm = '';

  constructor(private auth: AuthService,
     private router: Router,
     private snackbarService: CustomSnackbarService
  ) {}
  
  signup() {
    this.loading = true;
    if (this.password !== this.confirm) {
      this.snackbarService.open('Passwords Do not Match.', 'error');
       this.loading = false;
      return;
    }
  
    this.auth.signup({ username: this.username, password: this.password })
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: () => {
          this.router.navigate(['/login']);
          this.snackbarService.open('Sign Up Successful', 'success');
        },
        error: (err) => {
          if (err.status === 0) {
            this.snackbarService.open('Unable to connect. Please check your internet connection or try again later.', 'error');
          } else {
            this.snackbarService.open('Sign Up failed! Please try again.', 'error');
          }
        }
      });
  }
}