import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

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
export class AppComponent implements OnInit,OnDestroy {
  /** Show navbar & chrome? */
  showLayout = true;
  loading = false;
   private loadingSub!: Subscription;

  readonly menuItems: MenuItem[] = [
    { icon: 'home', label: 'Home', route: '/home' },
    { icon: 'list_alt', label: 'Generate Resume', route: '/resume-designer' },

    // { icon: 'description', label: 'Generate Resume', route: '/resume-template' },
    { icon: 'list_alt', label: 'Form', route: '/api-setup' }
  ];

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.setLayout(this.router.url);

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.setLayout(e.urlAfterRedirects));

       this.loadingSub = this.auth.loading$.subscribe(
      state => this.loading = state
    );
  }

  ngOnDestroy(): void {
    this.loadingSub.unsubscribe();
  }

  private setLayout(url: string): void {
    this.showLayout = !url.startsWith('/login') && !url.startsWith('/signup');
  }

  // via behavioral subject
  logout(): void {
    this.auth.logout();
  }

  // This is via promise
  // logout(): void {
  //   this.loading = true;

  //   this.auth.logout().then(() => {
  //     this.loading = false;
  //     this.router.navigate(['/login']);
  //   });
  // }
}
