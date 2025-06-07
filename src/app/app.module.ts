import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateDesignerComponent } from './template-designer/template-designer.component';
import { FormsModule } from '@angular/forms';
import { ResumeDesignerComponent } from './resume-designer/resume-designer.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { ResumeTemplateComponent } from './resume-template/resume-template.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ApiSetupComponent } from './api-setup/api-setup.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CustomSnackbarComponent } from './shared/custom-snackbar/custom-snackbar.component';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDesignerComponent,
    ResumeDesignerComponent,
    ResumeTemplateComponent,
    HomeComponent,
    ApiSetupComponent,
    LoginComponent,
    SignupComponent,
    CustomSnackbarComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule  ,
    DragDropModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
