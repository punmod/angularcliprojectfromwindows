import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AutoCompleteService {

constructor(private _http: Http) {

}
public getAutoSuggestTexts(query: string ) {
        let _url: string = 'http://localhost/angular4/getDataFromExcel.php?inputKeyWord=' +query;
        return this._http.get( _url );
    }

}