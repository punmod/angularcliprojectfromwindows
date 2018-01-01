import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ProfileService {
private headers: Headers;
private options: RequestOptions;
    constructor( private _http: Http){
 this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    saveProfile() {
        let _url: string = 'https://reqres.in/api/users';
        return this._http.post(_url, {name: 'Junaid', job: 'Programmer', city: 'Mumbai'})
        .map((res:Response) => res.json())
        .catch(this._errorHandler) ;
    }

      public saveEmployeeProfile(employeeObj: any) {
        let _url: string = 'http://localhost/angular4/saveProfile.php';
        return this._http.post(_url, employeeObj,  this.options)
       // .map((res:Response) => res.json())
        .catch(this._errorHandler) ;
    }

    private _errorHandler(error: Response) {
        console.error('Error Occured: ' + error);
        return Observable.throw(error || 'Some Error on Server Occured');


    }
  


}