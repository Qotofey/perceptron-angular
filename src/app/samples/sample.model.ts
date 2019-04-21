import { IAnswer } from '../answer/answer.model';
import { IQuestion } from '../questions/question.model';

export interface ISample {
    answer: IAnswer;
    questionList: IQuestion[];
}