import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /** Show navbar & chrome? */
  showLayout = true;

  readonly menuItems: MenuItem[] = [
    { icon: 'home',        label: 'Home',            route: '/home' },
    { icon: 'description', label: 'Generate Resume', route: '/resume-template' },
    { icon: 'list_alt',    label: 'Form',            route: '/api-setup' }
  ];

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    /* ---------- 1️⃣  initial URL ---------- */
    this.setLayout(this.router.url);

    /* ---------- 2️⃣  future navigations ---------- */
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.setLayout(e.urlAfterRedirects));
  }

  private setLayout(url: string): void {
    /* hide chrome on /login or /signup (with or without query-string) */
    this.showLayout = !url.startsWith('/login') && !url.startsWith('/signup');
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
