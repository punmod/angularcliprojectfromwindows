import { Component, OnInit } from '@angular/core';
import { ProjService } from '../../proj.service';
import { Project } from '../../project';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'papp-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class PAddComponent implements OnInit {

  constructor(
    private projService: ProjService,
     private router: Router) { }

  ngOnInit() {
  }

model = new Project();
  addProject(){
      this.projService
        .addProject(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/home']);
  }
}
