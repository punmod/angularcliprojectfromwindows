import { Component, OnInit } from '@angular/core';
import { ProjService } from '../../proj.service';
import { Project } from '../../project';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-report',
  templateUrl: './actreport.component.html',
  styleUrls: ['./actreport.component.css']
})
export class PActreportComponent implements OnInit {

  constructor(
    private _projService:ProjService,
   private route: ActivatedRoute,
    private router: Router
   ) { }
  projects:any;
  ngOnInit() {
    this.getProjects();
  }
  getProjects(){
     var uid = this.route.snapshot.params['uid'];
     this._projService
        .getProjects()
        .subscribe(employ => {
          this.projects = employ;
      } )
  }
  deleteProject(id){
      this._projService
        .deleteProject(id)
        .subscribe(() => {
        this.getProjects();
      } )
  }

}
