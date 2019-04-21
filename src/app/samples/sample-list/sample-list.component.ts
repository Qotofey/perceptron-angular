import { Component, OnInit } from '@angular/core';
import { ISample } from '../sample.model';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html'
})
export class SampleListComponent implements OnInit {

  public sampleList: ISample[] = [];

  private _chosenSample: ISample = null;

  constructor(
    private _sampleListService: SampleService
  ) { }

  ngOnInit() {
    this._sampleListService.getSampleList().subscribe({
      next: samples => {
        this.sampleList = samples;

        if (this.sampleList.length) {
          this.setSample(this.sampleList[0]);
        }
      }
    });
  }

  public setSample(sample: ISample) {
    this._chosenSample = (!this._chosenSample || this._chosenSample.answer.id !== sample.answer.id) ? sample : null;
    this._sampleListService.$sample.next(this._chosenSample);
  }

}
