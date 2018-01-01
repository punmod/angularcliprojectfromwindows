import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';


import { Input } from '@angular/core';
import { GetfundgettersService } from './getfundgetters.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
  
