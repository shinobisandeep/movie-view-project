import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserCredentials } from '../models/user';
import { SnackBarService, SnackBarType } from '../components/app-snackbar/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = 'https://demo.credy.in/api/v1/usermodule';

  constructor(private http: HttpClient, private snackBarService: SnackBarService) { }

  login(requestParam: UserCredentials): Observable<any> {
    return this.http.post(`${this.baseUrl}/login/`, requestParam).pipe(
      catchError((error: HttpErrorResponse) => {
        this.snackBarService.open('Failed to login. Please try again later.', SnackBarType.Error,'Close');
        return throwError(() => error);
      })
    )
  }
}
