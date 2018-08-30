import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { MessageService } from '../app/message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
   // à faire: envoyer le message après avoir récupéré les héros.
   this.messageService.add('HeroService: fetched heroes');
   return of (HEROES);
  }
}
