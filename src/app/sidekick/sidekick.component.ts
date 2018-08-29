import { Component, OnInit } from '@angular/core';
import { Sidekick } from './sidekick';


@Component({
  selector: 'app-sidekick',
  templateUrl: './sidekick.component.html',
  styleUrls: ['./sidekick.component.css']
})
export class SidekickComponent implements OnInit {

  sidekick: Sidekick = {
    id: 6,
    age: 32,
    name: 'Robin',
    quirk: 'un peu plus rapide'
  };

  constructor() { }

  ngOnInit() {
  }

}
