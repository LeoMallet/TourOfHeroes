import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Hero } from '../heroes/hero';
import { Sidekick } from '../sidekick/sidekick';

import { HeroService } from '../hero.service';
import {SidekickService } from '../sidekick.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  sidekicks$: Observable<Sidekick[]>;

  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService, private sidekickService: SidekickService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }


  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 200ms after each keystroke before considering the term
      debounceTime(200),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
    this.sidekicks$ = this.searchTerms.pipe(
      debounceTime(200),
      switchMap((term: string) => this.sidekickService.searchSidekicks(term))
    );
  }

}
