import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountactivationComponent } from './User-Login/accountactivation/accountactivation.component';
import { LoginComponent } from './User-Login/login/login.component';
import { PasswordComponent } from './User-Login/password/password.component';
import { SignUpComponent } from './User-Login/sign-up/sign-up.component';



const routes: Routes = [
{path:"",component:LoginComponent},
{path:"signup",component:SignUpComponent},
{path:"password",component:PasswordComponent},
{path:"account",component:AccountactivationComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
