// src/app/pages/signup/signup.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  username = '';
  password = '';
  confirm = '';

  constructor(private auth: AuthService) {}

  signup() {
    if (this.password !== this.confirm) {
      alert('Passwords do not match');
      return;
    }
    this.auth.signup({ username: this.username, password: this.password });
  }
}
