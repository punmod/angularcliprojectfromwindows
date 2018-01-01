import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetfundgettersService {

  constructor(private _http:Http) { }
checkme:any;
getfundgettingcolleges(){
    
    return this._http.get("http://misrusachd.in/fundgetterapi/select.php/")
      .map(res=>{
        this.checkme = res;
       
        if(this.checkme._body !== "0"){
           return res.json()
        }
       
      });
  }
 getactionplan(userid){
    return this._http.post("http://misrusachd.in/fundgetterapi/selectone.php/",{'userid':userid})
      .map(res=>res.json());
  }


}
