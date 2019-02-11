import {Sample} from "./sample";
import {Answer} from "./answer";
import {Question} from "./question";

export const SAMPLES: Sample[] = [
  {
    id: 1,
    answer: <Answer> { id: 1, text: 'Кнопка "меню" находится в левом верхнем углу.' },
    questions: [
      <Question> { id: 1, text: 'Где находится кнопка "меню"?' },
      <Question> { id: 2, text: 'Как зайти в "меню"?' }
    ]
  },
  {
    id: 2,
    answer: <Answer> { id: 2, text: 'Нажмите на кнопку в правом верхнем углу, обучение потребует время.' },
    questions: [
      <Question> { id: 3, text: 'Как запустить обучение системы?' },
      <Question> { id: 4, text: 'Не могу запустить обучение, что делать?' }
    ]
  },
  {
    id: 3,
    answer: <Answer> { id: 3, text: 'Во вкладке "меню" находится кнопка "настройки".' },
    questions: [
      <Question> { id: 5, text: 'Где находятся настройки?' },
      <Question> { id: 6, text: 'Где находится вкладка "настройки"?' }
    ]
  }
];
