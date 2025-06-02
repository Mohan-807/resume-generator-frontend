import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';

@Injectable({ providedIn: 'root' })
export class CustomSnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  open(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info', duration: number = 4000) {
    const config: MatSnackBarConfig = {
      duration,
      data: { message, type },
      panelClass: ['custom-snackbar-panel'],
      horizontalPosition: 'end',
      verticalPosition: 'top'
    };

    this.snackBar.openFromComponent(CustomSnackbarComponent, config);
  }
}
