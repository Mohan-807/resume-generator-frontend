import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
export class AppComponent {
  showLayout = true;

  menuItems: MenuItem[] = [
    { icon: 'home', label: 'Home', route: '/home' },
    { icon: 'info', label: 'Generate Resume', route: '/resume-template' },
    { icon: 'info', label: 'Form', route: '/api-setup' },
  ];

  constructor(private router: Router, private authService: AuthService) {
    // Hide layout on login/signup pages
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url;
        this.showLayout = !currentUrl.includes('/login') && !currentUrl.includes('/signup');
      }
    });
  }

  logout() {
    this.authService.logout();  // remove user from localStorage
    this.router.navigate(['/login']);
  }
}
