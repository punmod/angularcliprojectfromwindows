import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ProjService } from '../../proj.service';
import { Project } from '../../project';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class PEditComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projService: ProjService
  ) { }

  ngOnInit() {
      this.getSingleProject();
  }

  //model:any={};
  model = new Project();
  aid = this.route.snapshot.params['aid'];
   getSingleProject(){
    
    this.projService
      .getProject(this.aid)
      .subscribe(project =>{
          this.model = project[0];
          })
  };
  
  updateProject(){
      this.projService
        .updateProject(this.model)
        .subscribe(()=> this.goBack());
  }
 
   goBack(){
    this.router.navigate(['/home']);
  }
}
