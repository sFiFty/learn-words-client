import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WordsService {

  constructor(private _http: HttpClient) { }

  public getAll() {
    return this._http.get('http://localhost:3000/api/Words');
  }

}
