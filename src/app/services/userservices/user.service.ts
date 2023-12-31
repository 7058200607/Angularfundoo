import { Injectable } from '@angular/core';
import { HttpsService } from '../httpsservices/https.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any

  constructor(private httpService: HttpsService) { }

  signupService(reqSignup: any) {
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.postService('user/userSignup', reqSignup, false, httpHeadersOption)
  }

  loginService(reqdata:any){
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.postService('user/login', reqdata, false, httpHeadersOption)
  }
}
