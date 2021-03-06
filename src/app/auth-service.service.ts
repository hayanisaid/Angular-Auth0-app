import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';



@Injectable()
export class AuthServiceService {

   auth0 = new auth0.WebAuth({
    clientID: 'YourcClinetId',
    domain: 'Yourdomain',
    responseType: 'token id_token',
    audience: 'audience url',
    redirectUri: 'Redirect url',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
    //this.router.navigate(['profile']);
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
  /*se session*/
    private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }
  /*set session*/

  /*handle function*/
    public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/profile']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }
  /*handle functin*/

}
