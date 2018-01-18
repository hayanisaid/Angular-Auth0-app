import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';



@Injectable()
export class AuthServiceService {

   auth0 = new auth0.WebAuth({
    clientID: 'BAdyOLO1Ya20r6SXQ9ix6luVICF96kRr',
    domain: 'saidhayani.auth0.com',
    responseType: 'token id_token',
    audience: 'https://saidhayani.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  /*logout function*/
    public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  /*logoutfunction*/


  /*authenticated function*/
    public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  /*authtnetication function*/

}
