import { Injectable } from '@angular/core';
import { SIDEKICKS } from './mock-heroes';
import { Sidekick } from './sidekick/sidekick';

@Injectable({
  providedIn: 'root'
})
export class SidekickService {

  getSidekicks(): Sidekick[] {
    return SIDEKICKS;
  }

  constructor() { }
}
