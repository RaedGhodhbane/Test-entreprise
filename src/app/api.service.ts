import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  list1: string = 'https://test.wertkt.com/api/biz/'
  list2: string = 'https://test.wertkt.com/api/result/'

  constructor(private http: HttpClient) { }

  getlist1(): Observable<any> {
    return this.http.get<any>(this.list1).pipe(
      tap(_ => console.log('La requête fonctionne')),
      catchError(this.handleError<any>('getBooks', []))
    );
  }

  getlist2(): Observable<any> {
    return this.http.get<any>(this.list2).pipe(
      tap(_ => console.log('La requête fonctionne')),
      catchError(this.handleError<any>('getBooks', []))
    );
  }

  getdetail1(id: number): Observable<any> {
    return this.http.get(`${this.list1}/${id}`);
  }
  getdetail2(id: number): Observable<any> {
    return this.http.get(`${this.list2}/${id}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
