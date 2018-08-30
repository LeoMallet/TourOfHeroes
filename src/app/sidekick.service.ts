import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SIDEKICKS } from './mock-heroes';
import { Sidekick } from './sidekick/sidekick';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SidekickService {

  constructor(private messageService: MessageService) { }


  getSidekicks(): Observable<Sidekick[]> {
    this.messageService.add('SidekickService: fetched sidekicks');
    return of (SIDEKICKS);
  }

}
