// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService) {}

  login() {
    this.auth.login({ username: this.username, password: this.password });
  }
}
