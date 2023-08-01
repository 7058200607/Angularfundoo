import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-noteicon',
  templateUrl: './noteicon.component.html',
  styleUrls: ['./noteicon.component.scss']
})
export class NoteiconComponent {
  @Input() noteinfo: any;
}
