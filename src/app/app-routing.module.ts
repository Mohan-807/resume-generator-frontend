import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeTemplateComponent } from './resume-template/resume-template.component';
import { ApiSetupComponent } from './api-setup/api-setup.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {path:'home', component: HomeComponent},
  {path:'resume-template', component: ResumeTemplateComponent},
  {path:'api-setup', component: ApiSetupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
