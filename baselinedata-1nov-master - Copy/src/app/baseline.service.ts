import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseService {
  projects=[];
  constructor(private _http:Http) { }
  checkMe:any;
  
  
  
   getbaselinedata(){
    
    return this._http.get("../api/baselineapi/select.php")
      .map(res=> res.json());
  }
  
  
  
  
  getParameter(aid,paramid){
    return this._http.post("../api/baselineapi/selectone.php/",{'aid':aid,'paramid':paramid})
      .map(res=>res.json());
  }
  
  
   
  updateparameter(info){
   console.log("reached insideservice");
    return this._http.post("../api/baselineapi/update.php/", info)
      .map(()=>"");
      }
}
