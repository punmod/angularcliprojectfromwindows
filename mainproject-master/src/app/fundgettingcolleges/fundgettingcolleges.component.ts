import { Component, OnInit } from '@angular/core';


import { Input } from '@angular/core';
import { GetfundgettersService } from '../getfundgetters.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fundgettingcolleges',
  templateUrl: './fundgettingcolleges.component.html',
  styleUrls: ['./fundgettingcolleges.component.css'],
  
})
export class FundgettingcollegesComponent implements OnInit {

  constructor(private _getterService:GetfundgettersService,
   private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
   this.getfundgetters(); 

  }



getters:any;
    
  getfundgetters(){
      this._getterService
        .getfundgettingcolleges()
        .subscribe(employ => {
          this.getters = employ;
      
    } )
   
  }     
           
}
  
