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
    private router: Router,
    private route: ActivatedRoute,
    private projService: ProjService
  ) { }
  ngOnInit() {
  }

model = new Project();
 uid = this.route.snapshot.params['uid'];
  addProject(){
      this.projService
        .addProject(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/home']);
  }
}
