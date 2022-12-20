import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  // ...

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('access_token');
    console.log(token);
    // Check whether the token is expired and return
    // true or false
    let jwtHelper: JwtHelperService = new JwtHelperService();

    const tokenIsExpired = token && !jwtHelper.isTokenExpired(token);

    return tokenIsExpired ? true : false;
  }

  public getToken(): string | null {
    return sessionStorage.getItem('access_token');
  }
}
