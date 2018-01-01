import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowactionplanComponent } from './showactionplan/showactionplan.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FundgettingcollegesComponent } from './fundgettingcolleges/fundgettingcolleges.component';
const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:FundgettingcollegesComponent},
  {path:"show/:userid", component:ShowactionplanComponent},
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
