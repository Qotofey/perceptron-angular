import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { IQuestion } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private _http: HttpClient
  ) { }

  public getQuestionList() {
    return this._http.get<IQuestion[]>('http://api-perceptron.qotofey.ru/questions');
  }
}
