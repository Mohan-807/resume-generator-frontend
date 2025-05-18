import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({ selector: 'app-login', templateUrl: './login.component.html' })
export class LoginComponent {
  username = '';  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const res = this.auth.login({ username: this.username, password: this.password });
    if (res.ok) this.router.navigate(['/home']);
    else        alert(res.msg);
  }
}
