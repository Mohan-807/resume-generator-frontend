import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ResumeTemplateComponent } from './resume-template/resume-template.component';
import { ApiSetupComponent } from './api-setup/api-setup.component';
import { ResumeDesignerComponent } from './resume-designer/resume-designer.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // Protected routes
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'resume-designer', component: ResumeDesignerComponent, canActivate: [AuthGuard] },
  { path: 'resume-template', component: ResumeTemplateComponent, canActivate: [AuthGuard] },
  { path: 'api-setup', component: ApiSetupComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: 'home' }  // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
