import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { SIDEKICKS } from './mock-heroes';
import { Sidekick } from './sidekick/sidekick';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SidekickService {

  private sidekickUrl = 'api/heroes'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  private log(message: string) {
    this.messageService.add(`SidekickService: ${message}`);
  }


  getSidekicks(): Observable<Sidekick[]> {
    return this.http.get<Sidekick[]>(this.sidekickUrl)
    .pipe(
      tap(sidekicks => this.log('fetched sidekicks')),
      catchError(this.handleError('getSidekicks', []))
    );
 }

  // GET sidekick by id. Will 404 if id not found
  getSidekick(id: number): Observable<Sidekick> {
    const url = `${this.sidekickUrl}/${id}`;
    return this.http.get<Sidekick>(url).pipe(
      tap(_ => this.log(`fetched sidekick id=${id}`)),
      catchError(this.handleError<Sidekick>(`getSidekick id=${id}`))
    );
  }
}
