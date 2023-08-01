import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { GetallnotesComponent } from './component/getallnotes/getallnotes/getallnotes.component';

const routes: Routes = [
  {
     path: '', pathMatch: 'full', redirectTo: 'login'
     },
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"dashboard",component:DashboardComponent,children
:[{path:"getallnotes",component:GetallnotesComponent},{
  path:"",pathMatch:"full",redirectTo:"getallnotes"
}]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }