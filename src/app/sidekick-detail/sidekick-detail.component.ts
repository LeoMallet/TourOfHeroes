import { Component, OnInit, Input } from '@angular/core';
import { Sidekick } from '../sidekick/sidekick';

@Component({
  selector: 'app-sidekick-detail',
  templateUrl: './sidekick-detail.component.html',
  styleUrls: ['./sidekick-detail.component.css']
})



export class SidekickDetailComponent implements OnInit {
  @Input() sidekick: Sidekick;

  constructor() { }

  ngOnInit() {
  }

}
