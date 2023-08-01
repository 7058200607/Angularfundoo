import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent {
 
  constructor(){}
  @Input() childData:any;
  @Output() refreshdata = new EventEmitter();
  refresh(event:any){
    this.refreshdata.emit();
  }

}
