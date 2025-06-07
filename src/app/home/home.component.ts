import { Component } from '@angular/core';
import { CustomSnackbarService } from '../shared/custom-snackbar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private snackbar: MatSnackBar,
        private snackbarService: CustomSnackbarService
  ) {
  }
  openSnackBar(): void {
       this.snackbarService.open('Logged in successfully!', 'error');
  }

  openCustomSnackBar(): void {
    this.snackbarService.open('Logged in successfully!', 'success');
  }
}
