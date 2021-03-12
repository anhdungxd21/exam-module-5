import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const API_URL =`${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class BookService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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

  constructor(private http: HttpClient) { }

  /** GET all book */
  getAll():Observable<any>{
    return this.http.get<any>(API_URL);
  }

  /** GET book by id */
  getBookById(id:number):Observable<any>{
    return this.http.get<any>(API_URL+`/${id}`);
  }

  /** POST add a book */
  addBook(book:any){
    return this.http.post<any>(API_URL,book, this.httpOptions).pipe(
      tap((newBook:any) => console.log(`added book w/ id=${newBook.id}`)),
      catchError(this.handleError<any>('addBook'))
    );
  }

  /** DELETE delete a book */
  deleteBook(id:any):Observable<any>{
    return this.http.delete<any>(API_URL+`/${id}`, this.httpOptions).pipe(
      tap((newBook:any) => console.log(`deleted book w/ id=${newBook.id}`)),
      catchError(this.handleError<any>('deleteBook'))
    );
  }

  /** PUT update book */
  updateBook(id:number,book:any):Observable<any>{
    return this.http.put<any>(API_URL+`/${id}`, book, this.httpOptions).pipe(
      tap((newBook:any) => console.log(`updated book w/ id=${newBook.id}`)),
      catchError(this.handleError<any>('updateBook'))
    );
  }
}
