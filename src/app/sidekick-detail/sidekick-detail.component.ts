import { Component, OnInit, Input } from '@angular/core';
import { Sidekick } from '../sidekick/sidekick';
import { SidekickService } from '../sidekick.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidekick-detail',
  templateUrl: './sidekick-detail.component.html',
  styleUrls: ['./sidekick-detail.component.css']
})



export class SidekickDetailComponent implements OnInit {
  @Input() sidekick: Sidekick;

  constructor(
    private route: ActivatedRoute,
    private sidekickService: SidekickService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getSidekick();
  }

  getSidekick(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sidekickService.getSidekick(id).subscribe(sidekick => this.sidekick = sidekick);
  }

  goBack(): void {
    this.location.back();
  }

}
