import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export interface Boxes {
  id: number;
  name: string;
  piece: number;
  prix: number;
  saveur: string;
  }
  
const urlrest = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class BoxesService {
  
  private boxe: Boxes[];

  constructor(private http: HttpClient) { 
    this.boxe = [];
  }
  httpHeader = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
  // interrogation de l'API pour afficher les plateaux
  getBoxes(): Observable<any> {
    return this.http.get<any>(urlrest + '/boxes').pipe(
    catchError(this.handleError)
    );
  }

  // delete(id: string): Observable<any> {
  //   return this.http.delete<any>(urlrest + '/boxes/' + id).pipe(
  //     catchError(this.handleError)
  //   )
  // }
      
  getBoxe(id: number): Observable<any> {
    return this.http.get<any>(urlrest + '/boxes' + id).pipe(
    catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    }
    else {
      console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
    }
    return throwError(() => 'Something bad happened; please try again later.');
  }
  
   //localStorage

  getAllBoxes() {
    this.boxe = JSON.parse(localStorage.getItem('Boxes') || '[]');
    return this.boxe;
    
  }

  addBoxe(boxe: Boxes) {
    this.boxe.push(boxe);

    let tabItems = JSON.stringify(this.boxe);
    localStorage.setItem('Boxes', tabItems);
  }

}




