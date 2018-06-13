import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class WordsService {

  constructor(private _http: HttpClient) { }

  public getAll() {
    return this._http.get('http://localhost:3000/api/Words');
  }

  public addWord = data => {
    return this._http.post('http://localhost:3000/api/Words', data, httpOptions);
  }

}
