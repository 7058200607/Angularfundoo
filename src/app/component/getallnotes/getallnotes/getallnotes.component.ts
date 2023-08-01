import { Component } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteservices/noteservices.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent {
  notesData: any;
  constructor(private note:NoteservicesService) { }

  ngOnInit(): void {
    this.getNotes()
  }
  getNotes(){
    this.note.getallNotes().subscribe(
      (res:any) => {
        console.log(res.data.data);
         this.notesData=res.data.data
        this.notesData=this.notesData.reverse()
        this.notesData=this.notesData.filter(function(data:any){
          return data.isArchived ===false &&
                 data.isDeleted === false              
        })  
    })
  }
  receivedMsg(event:any){
    this.getNotes()
  }
  refresh(){
    this.getNotes()
  }
}

