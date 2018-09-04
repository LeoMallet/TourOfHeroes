import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Sidekick } from './sidekick/sidekick';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SidekickService {

  private sidekicksUrl = 'api/sidekicks'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }



  private log(message: string) {
    this.messageService.add(`SidekickService: ${message}`);
  }


  getSidekicks(): Observable<Sidekick[]> {
    return this.http.get<Sidekick[]>(this.sidekicksUrl)
    .pipe(
      tap(sidekicks => this.log('fetched sidekicks')),
      catchError(this.handleError('getSidekicks', []))
    );
 }

   /* GET sidekicks whose name contains search term */
searchSidekicks(term: string): Observable<Sidekick[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Sidekick[]>(`${this.sidekicksUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found sidekick(s) matching "${term}"`)),
    catchError(this.handleError<Sidekick[]>('searchSidekicks', []))
  );
}

  // GET sidekick by id. Will 404 if id not found
  getSidekick(id: number): Observable<Sidekick> {
    const url = `${this.sidekicksUrl}/${id}`;
    return this.http.get<Sidekick>(url).pipe(
      tap(_ => this.log(`fetched sidekick id=${id}`)),
      catchError(this.handleError<Sidekick>(`getSidekick id=${id}`))
    );
  }


    /** PUT: update the hero on the server */
updateSidekick (sidekick: Sidekick): Observable<any> {
  return this.http.put(this.sidekicksUrl, sidekick, httpOptions).pipe(
    tap(_ => this.log(`updated sidekick id=${sidekick.id}`)),
    catchError(this.handleError<any>('updateSidekick'))
  );
}

/** POST: add a new hero to the server */
addSidekick (sidekick: Sidekick): Observable<Sidekick> {
  return this.http.post<Sidekick>(this.sidekicksUrl, sidekick, httpOptions).pipe(
    // tslint:disable-next-line:no-shadowed-variable
    tap((sidekick: Sidekick) => this.log(`added sidekick w/ id=${sidekick.id}`)),
    catchError(this.handleError<Sidekick>('addSidekick'))
  );
}

/** DELETE: delete the hero from the server */
deleteSidekick (sidekick: Sidekick | number): Observable<Sidekick> {
  const id = typeof sidekick === 'number' ? sidekick : sidekick.id;
  const url = `${this.sidekicksUrl}/${id}`;

  return this.http.delete<Sidekick>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted sidekick id=${id}`)),
    catchError(this.handleError<Sidekick>('deleteSidekick'))
  );
}


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
}
