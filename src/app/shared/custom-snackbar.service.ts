import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class CustomSnackbarService {
  constructor(private snackBar: MatSnackBar) { }

  open(message: string,
    panelClass: string = '',
    duration: number = 3000,
    action: string = 'Close',
    horizontalPosition: MatSnackBarHorizontalPosition = 'end',
    verticalPosition: MatSnackBarVerticalPosition = 'top'
  ): void {
    const config: MatSnackBarConfig = {
      duration,
      panelClass: [panelClass],
      horizontalPosition,
      verticalPosition
    };

    this.snackBar.open(message, action, config);
  }

}
