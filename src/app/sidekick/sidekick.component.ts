import { Component, OnInit } from '@angular/core';
import { SIDEKICKS } from '../mock-heroes';
import { Sidekick } from './sidekick';


@Component({
  selector: 'app-sidekick',
  templateUrl: './sidekick.component.html',
  styleUrls: ['./sidekick.component.css']
})
export class SidekickComponent implements OnInit {

  sidekicks = SIDEKICKS;
  selectedSidekick: Sidekick;

  constructor() { }

  ngOnInit() {
  }

  onSelect(sidekick: Sidekick): void {
    this.selectedSidekick = sidekick;
  }
}
