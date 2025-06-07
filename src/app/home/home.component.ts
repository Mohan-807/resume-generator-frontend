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
     private snackbar: MatSnackBar
  ){
  }
openSnackBar():void {
   const message = 'message is success'
 this.snackbar.open(message, 'Close', {
  duration: 3000,
  panelClass: ['snackbar-success'],
  horizontalPosition: 'end',
  verticalPosition: 'top'
});

}
}
