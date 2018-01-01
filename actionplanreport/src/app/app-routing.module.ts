import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ems/home/home.component';
import { AddComponent } from './ems/add/add.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';

import { PHomeComponent } from './pems/home/home.component';
import { PAddComponent } from './pems/add/add.component';
import { PEditComponent } from './pems/edit/edit.component';
import { PShowComponent } from './pems/show/show.component';

import { PActreportComponent } from './pems/actreport/actreport.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:PHomeComponent},
  
  {path:"add", component:PAddComponent},
  {path:"edit/:aid", component:PEditComponent},
  {path:"show/:id", component:PShowComponent},
  {path:"report", component:PActreportComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
