import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, catchError, Observable } from 'rxjs';

import { ADMIN_LOGIN, CREATE_ADMIN_USER } from '../endpoints';
import { ILogin, IUser } from 'src/models';

@Injectable({ providedIn: 'root' })

export class AdminService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  adminLogin = (data) => {
    const res = this.http.post<ILogin>(ADMIN_LOGIN, data).pipe(catchError(this.handleError))
    return res;
  }

  adminLogout = () => {}

  createAdminUser = (data) => {
    const res = this.http.post<ILogin>(CREATE_ADMIN_USER, data).pipe(catchError(this.handleError))
    return res;
  }



}