import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupform!:FormGroup
  showpassword:boolean=false
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
  this.signupform=this.formBuilder.group({
    firstname:["",Validators.required],
    lastname:["",Validators.required],
    email:["",Validators.required],
    passward:["",Validators.required],
    confirmpassword:["",Validators.required]
  })
  }
  showpasswords(event:any){
    this.showpassword=!this.showpassword
  }
  
}

