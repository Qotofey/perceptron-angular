import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  // styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  layers: number[] = [1, 2, 3, 4, 5];

  layersCount: number;

  constructor() { }

  ngOnInit() {
  }

}
