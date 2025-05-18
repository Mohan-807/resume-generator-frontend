import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from '../home/home.component';
import { ResumeTemplateComponent } from '../resume-template/resume-template.component';
import { ApiSetupComponent } from '../api-setup/api-setup.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'resume-template', component: ResumeTemplateComponent },
      { path: 'api-setup', component: ApiSetupComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
