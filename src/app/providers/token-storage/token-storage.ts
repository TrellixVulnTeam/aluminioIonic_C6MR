import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
/*
  Generated class for the TokenStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TokenStorageProvider {

  /**
   * Get access token
   * @returns {Observable<string>}
   */
  public getAccessToken(): Observable<string> {
    const token: string = <string>localStorage.getItem('access_token');
    return of(token);
  }

  /**
   * Get refresh token
   * @returns {Observable<string>}
   */
  public getRefreshToken(): Observable<string> {
    const token: string = <string>localStorage.getItem('refresh_token');
    return of(token);
  }

  /**
   * Set access token
   * @returns {TokenStorageProvider}
   */
  public setAccessToken(token: string): TokenStorageProvider {
    localStorage.setItem('access_token', token);

    return this;
  }

  /**
   * Set refresh token
   * @returns {TokenStorageProvider}
   */
  public setRefreshToken(token: string): TokenStorageProvider {
    localStorage.setItem('refresh_token', token);

    return this;
  }

  /**
   * Remove tokens
   */
  public clear() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
  public clear_refresh() {
    localStorage.removeItem('refresh_token');
  }

  public getPayload(){

    const token: string = <string>localStorage.getItem('access_token');
    if (token && token.split('.').length === 3) {
      try {
        var /** @type {?} */ base64Url = token.split('.')[1];
        var /** @type {?} */ base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(decodeURIComponent(encodeURIComponent(window.atob(base64))));
      }
      catch (e) {
        return undefined;
      }
    }else{
      return undefined;
    }
  }

  public getExpirationDate(){
    let dataEx;
    let payload = this.getPayload();
    if (payload && payload.exp && Math.round(new Date().getTime() / 1000) < payload.exp) {
      var /** @type {?} */ date = new Date(0);
      date.setUTCSeconds(payload.exp);
      dataEx =  date;
    }else{
      dataEx = null;
    }
    // });
    return dataEx;
  }

}

