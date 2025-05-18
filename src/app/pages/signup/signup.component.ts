import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({ selector: 'app-signup', templateUrl: './signup.component.html' })
export class SignupComponent {
  username = ''; password = ''; confirm = '';

  constructor(private auth: AuthService, private router: Router) {}

  signup() {
    if (this.password !== this.confirm) {
      alert('Passwords do not match'); return;
    }

    const res = this.auth.register({ username: this.username, password: this.password });
    if (res.ok) {
      alert('Account created! Please log in');
      this.router.navigate(['/login']);
    } else {
      alert(res.msg);
    }
  }
}
