import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule} from '@angular/common';
 
import { AppComponent } from './app.component';
import { NavbarComponent } from './ems/navbar/navbar.component';
import { HomeComponent } from './ems/home/home.component';
import { AddComponent } from './ems/add/add.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { EmpService } from './emp.service';

import { PActreportComponent } from './pems/actreport/actreport.component';
import { PAppComponent } from './papp.component';
import { PNavbarComponent } from './pems/navbar/navbar.component';
import { PHomeComponent } from './pems/home/home.component';
import { PAddComponent } from './pems/add/add.component';
import { PEditComponent } from './pems/edit/edit.component';
import { PShowComponent } from './pems/show/show.component';
import { ProjService } from './proj.service';

import { ReportComponent } from './report.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    ShowComponent,
    EditComponent,
    PAppComponent,
    PNavbarComponent,
    PHomeComponent,
    PAddComponent,
    PShowComponent,
    PEditComponent,
    PActreportComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [EmpService,ProjService],
  bootstrap: [ReportComponent]
})
export class AppModule { }
