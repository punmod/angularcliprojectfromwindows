import { Component, OnInit,Input } from '@angular/core';
import { ProjService } from '../../proj.service';
import { Project } from '../../project';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class PHomeComponent implements OnInit {
        
 
 private static status;
 firstcollege:Project;
  status=true;
  constructor(
    private _projService:ProjService,
   private route: ActivatedRoute,
    private router: Router
   ) {
     
  }
  projects:any;
  count:any;
  ngOnInit() {
   this.getProjects(); 
  this.count=0;  
  }
    
    newcollege()
    {
      ++this.count;
      if(this.firstcollege===this.projects[1])
      {return false;}
     
      else
      {this.firstcollege=this.projects[this.count]
        return true;}
    }

 uid:any;
  getProjects(){
      this.uid = this.route.snapshot.params['uid'];
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
