import { Component, OnInit } from '@angular/core';

import { Sample } from "../sample";
import { Answer } from "../answer";
import { Question } from "../question";
import { SAMPLES } from "../mock-samples";

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {

  samples = SAMPLES;

  sample: Sample = {
    id: 1,
    answer: <Answer> {
      id: 1,
      text: 'First Answer'
    },
    questions: [
      <Question> {id: 1, text: 'First Question?'},
      <Question> {id: 2, text: 'Second Question?'},
      <Question> {id: 3, text: 'Third Question?'}
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
