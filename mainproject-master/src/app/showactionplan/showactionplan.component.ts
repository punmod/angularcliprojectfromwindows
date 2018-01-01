import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { GetfundgettersService } from '../getfundgetters.service';
@Component({
  selector: 'app-showactionplan',
  templateUrl: './showactionplan.component.html',
  styleUrls: ['./showactionplan.component.css']
})
export class ShowactionplanComponent implements OnInit {

  constructor( private router: Router,
    private route: ActivatedRoute,
    private _getterService:GetfundgettersService
) { }

  ngOnInit() {
 this.getActionplan();
  }
  actplan:any={};
  getActionplan(){
    var id = this.route.snapshot.params['userid'];
    this._getterService.
      getactionplan(id)
      .subscribe(employee =>{
          this.actplan = employee;
          })
  };

goBack(){
    this.router.navigate(['/home']);
  }


  }

