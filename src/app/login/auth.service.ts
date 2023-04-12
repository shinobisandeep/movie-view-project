import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserCredentials } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = 'https://demo.credy.in/api/v1/usermodule';

  constructor(private http: HttpClient) { }

  login(requestParam: UserCredentials): Observable<any> {
    return this.http.post(`${this.baseUrl}/login/`, requestParam);
  }
}
