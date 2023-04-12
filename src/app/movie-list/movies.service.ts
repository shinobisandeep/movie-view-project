import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { SnackBarService, SnackBarType } from '../components/app-snackbar/snackbar/snackbar.service';
import { MoviesListResponse } from './movie-list.response';

@Injectable()
export class MovieService {
  private apiUrl = 'https://demo.credy.in/api/v1/maya/movies/';
  private token = localStorage.getItem('token');

  constructor(private http: HttpClient, private snackBarService: SnackBarService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({ 'Authorization': `Token ${this.token}`,
 });
  }

  private getImagesHeaders(): HttpHeaders {
    return new HttpHeaders({ 'Authorization': `Token ${this.token}`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization' });
  }

  getMovies(): Observable<MoviesListResponse> {
    const headers = this.getHeaders();
    return this.http.get<MoviesListResponse>(this.apiUrl, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        this.snackBarService.open('Not Able To Fetch Movies', SnackBarType.Error,'Close');
        return throwError(() => error);
      })
    );
  }

  getImages(name: string): Observable<any>{
    const headers = this.getImagesHeaders();
     return this.http.get<any>('https://ui-avatars.com/api/', {
      headers,
      params:{
        name: 'John'
      }
     }).pipe(
      catchError((error: HttpErrorResponse) => {
        this.snackBarService.open('Fetching Image Failed', SnackBarType.Error,'Close');
        return throwError(() => error);
      })
    );;
  }
}
