import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { IAnswer } from './answer.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(
    private _http: HttpClient
  ) { }

  public getAnswerList() {
    return this._http.get<IAnswer[]>('http://api-perceptron.qotofey.ru/answers');
  }
}
