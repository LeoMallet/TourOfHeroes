import { Component, OnInit } from '@angular/core';

import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';
import { Sidekick } from '../sidekick/sidekick';
import { SidekickService } from '../sidekick.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  sidekicks: Sidekick[] = [];

  constructor(private heroService: HeroService, private sidekickService: SidekickService) { }

  ngOnInit() {
    this.getHeroes();
    this.getSidekicks();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }
  getSidekicks(): void {
    this.sidekickService.getSidekicks()
    .subscribe(sidekicks => this.sidekicks = sidekicks.slice(1, 5));
  }
}
