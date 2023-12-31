import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
loginform!:FormGroup
constructor(private formBuilder: FormBuilder,private snackBar: MatSnackBar,private userService:UserService,private route:Router){}
ngOnInit() {
  this.loginform = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]

  });
}
login() {
  if (this.loginform.valid) {
    let reqdata = {
      email: this.loginform.value.email,
      password: this.loginform.value.password,
    }

    this.userService.loginService(reqdata).subscribe((result: any) => {
      console.log("Login Successful:", result);
      this.snackBar.open('Login Successfully!', '', { 
        duration: 2000 
      });
      localStorage.setItem('token', result.id);
      this.route.navigateByUrl("/dashboard")
   
    })
  }
  else {
    console.log("invalid data");
    this.snackBar.open('Login failed!', '', {
      duration: 1000
    });
  }
}
}


