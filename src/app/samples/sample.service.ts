import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, combineLatest, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { QuestionService } from '../questions/question.service';
import { AnswerService } from '../answer/answer.service';
import { ISample } from './sample.model';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  public $sample: Subject<ISample> = new Subject();

  constructor(
    private _http: HttpClient,
    private _questionService: QuestionService,
    private _answerService: AnswerService
  ) { }

  public getSampleList(): Observable<ISample[]> {
    return combineLatest(
      this._questionService.getQuestionList(),
      this._answerService.getAnswerList()
    ).pipe(
      map(
        ([questions, answers]) => {
          const samples = answers.map(answer => {
            const relyQuestions = questions.filter(question => {
              return question.answer_id === answer.id;
            });
            return {
              answer: answer,
              questionList: relyQuestions
            } as ISample;
          });
          return samples;
        }
      )
    );
  }

}
