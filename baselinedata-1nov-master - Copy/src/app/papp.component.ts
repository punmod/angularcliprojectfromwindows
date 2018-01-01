import { Component,Input } from '@angular/core';


@Component({
  selector: 'papp-root',
  templateUrl: './papp.component.html',

})
export class PAppComponent {
  @Input() uid:any;
  title = 'Papp works!';
  constructor () {
    
   
  }
}
