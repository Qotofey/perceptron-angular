import { Component, OnInit } from '@angular/core';
import { ISample } from '../sample.model';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-sample-item',
  templateUrl: './sample-item.component.html'
})
export class SampleItemComponent implements OnInit {

  sample: ISample;

  constructor(
    private _sampleService: SampleService,
  ) { }

  ngOnInit() {
    this._sampleService.$sample.subscribe({
      next: sample => {
        this.sample = sample;
      }
    });
  }

}
