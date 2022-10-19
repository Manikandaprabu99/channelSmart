import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User-Login/login/login.component';
import { PasswordComponent } from './User-Login/password/password.component';
import { AccountactivationComponent } from './User-Login/accountactivation/accountactivation.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PasswordComponent,
    AccountactivationComponent,
    
    
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
