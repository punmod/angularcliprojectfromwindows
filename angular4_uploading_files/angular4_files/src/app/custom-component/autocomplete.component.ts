import { Component, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteService } from '../services/autocomplete.service';

@Component({
  selector: 'auto-complete',
    template: `
            <div class="form-group">
             <label for="suburb">Suburb</label>
              <input id="suburb" type="text" class="form-control" [(ngModel)]="query" (keyup)="extractSuggestedTexts()">
            </div>
            <div class="suggestions" *ngIf="suggestedTexts.length > 0">
                <ul *ngFor =" let item of suggestedTexts" customHover="pink" >
                    <li style="list-style:none;margin-left:-25px;" (click)="selectData(item)">
                        {{item}}
                    </li>
                </ul>
            </div>	
        `,
styles: [`
.suggestions{
    background-color: white;/*#f7f797;*/
    border: 1px solid #ccc;
    margin-top: -27px;
}
`]
})
export class AutocompleteComponent implements OnInit {
    @Output()
    public dataEvent:EventEmitter<any> = new EventEmitter<any>();
    public query = '';
    public fullData: any;
    public suggestedTexts = [];
    public items: any;

 
    constructor(private elementRef: ElementRef, private autoCompleteService: AutoCompleteService) {
    
    }
 ngOnInit(): void {
 this.autoCompleteService.getAutoSuggestTexts('ALL').subscribe(res=>this.extractItems(res.json()));
}

public extractItems(data: any): void {
    this.fullData = data;
  let suburbKeys = Object.keys(data);
  let itemCount: number = suburbKeys.length;
    this.items =[];
    for (let i=0 ; i<itemCount; i++) {
this.items.push(suburbKeys[i]);
  }
}
    public extractSuggestedTexts() {
    if (this.query !== ""){
        this.suggestedTexts = this.items.filter(function(el){
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }else{
        this.suggestedTexts = [];
    }
}
 
public selectData(item: any){
    this.query = item;
    this.suggestedTexts = [];
   // console.log('query', this.query);
     let vals = this.fullData[item];
    let valsArray = vals.split("~");
    console.log('vals', vals);
    let dataObj ={
        stateValue: valsArray[5],
        typeValue: valsArray[7]
    }
    this.dataEvent.emit(dataObj);
  //  this.elem.nativeElement.querySelector('#state').value=valsArray[5];
   // this.elem.nativeElement.querySelector('#type').value=valsArray[7];
}

}