import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Word, Translation } from './models/word.model.js';
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

  public addWord = (data): Observable<Word> => {
    return this._http.post('http://localhost:3000/api/Words', data, httpOptions);
  }

  public translate = (text: string): Observable<Translation> => {
    return this._http.post('http://localhost:3000/api/Words/translate', {
      text: text,
    });
  }

  public deleteWord = (id: number) => {
    return this._http.delete(`http://localhost:3000/api/Words/${id}`);
  }

}
