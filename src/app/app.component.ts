import { Component } from '@angular/core';

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
  menuItems: MenuItem[] = [
    { icon: 'home', label: 'Home', route: '/home' },
    { icon: 'info', label: 'Generate Resume', route: '/resume-template' },
    { icon: 'info', label: 'Form', route: '/api-setup' },
  ];
}
