import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpsService } from '../httpsservices/https.service';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {

  token:any
  constructor(private httpService:HttpsService) { }
  CreateNotes(reqdata:any){
    this.token=localStorage.getItem('token');
    let httpHeadersOption = {
      headers : new HttpHeaders({ 
        contentType : 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.postService('notes/addNotes', reqdata, true, httpHeadersOption)
  }
}
