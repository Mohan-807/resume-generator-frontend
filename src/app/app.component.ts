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
  /** Controls whether the navbar/layout should be visible */
  showLayout = true;

  /** Top-level navigation links */
  readonly menuItems: MenuItem[] = [
    { icon: 'home', label: 'Home', route: '/home' },
    { icon: 'description', label: 'Generate Resume', route: '/resume-template' },
    { icon: 'list_alt', label: 'Form', route: '/api-setup' }
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  /** Initialise once the component is bootstrapped */
  ngOnInit(): void {
    /** 1️⃣  Set the flag for the very first URL (initial page load) */
    this.setLayoutVisibility(this.router.url);

    /** 2️⃣  Keep it updated for every subsequent navigation */
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(event => {
        this.setLayoutVisibility(event.urlAfterRedirects);
      });
  }

  /** Compute whether the main layout should be shown */
  private setLayoutVisibility(url: string): void {
    this.showLayout = !url.startsWith('/login') && !url.startsWith('/signup');
  }

  /** Clear credentials and return to the login page */
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
