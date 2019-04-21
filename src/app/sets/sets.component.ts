import { Component, OnInit } from '@angular/core';
import { ISet } from './sets.model';
import { SetsService } from './sets.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent implements OnInit {

  public sets: ISet[] = [];

  constructor(
    private _setsService: SetsService
  ) { }

  ngOnInit() {
    this._setsService.getSets().subscribe(data => {
      this.sets = data;
    });
  }

}
