import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule} from '@angular/common';


import { AppComponent } from './app.component';
import { FundgettingcollegesComponent } from './fundgettingcolleges/fundgettingcolleges.component';
import { GetfundgettersService } from './getfundgetters.service';
import { ShowactionplanComponent } from './showactionplan/showactionplan.component';
@NgModule({
  declarations: [
    AppComponent,
    FundgettingcollegesComponent,
    ShowactionplanComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [GetfundgettersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
