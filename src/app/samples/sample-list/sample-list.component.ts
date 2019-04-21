import { Component, OnInit } from '@angular/core';
import { ISample } from '../sample.model';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html'
})
export class SampleListComponent implements OnInit {

  public sampleList: ISample[] = [];

  constructor(
    private _sampleListService: SampleService
  ) { }

  ngOnInit() {
    this._sampleListService.getSampleList().subscribe({
      next: data => {
        console.log(data);
        this.sampleList = data;
      }
    });
  }

}
