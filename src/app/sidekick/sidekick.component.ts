import { Component, OnInit } from '@angular/core';
import { Sidekick } from './sidekick';
import { SidekickService } from '../sidekick.service';


@Component({
  selector: 'app-sidekick',
  templateUrl: './sidekick.component.html',
  styleUrls: ['./sidekick.component.css']
})
export class SidekickComponent implements OnInit {

  sidekicks: Sidekick[];


  constructor(private sidekickService: SidekickService) { }

  ngOnInit() {
    this.getSidekick();
  }


  getSidekick(): void {
    this.sidekickService.getSidekicks()
      .subscribe(sidekicks => this.sidekicks = sidekicks);
  }
}
