import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './component/signup/signup.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ResetComponent } from './component/reset/reset.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
         SignupComponent,
         ResetComponent,
         ForgotComponent,
         DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,BrowserAnimationsModule,FormsModule,MatCheckboxModule, MatSnackBarModule,
    HttpClientModule,MatSidenavModule,MatToolbarModule,MatIconModule ,MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
