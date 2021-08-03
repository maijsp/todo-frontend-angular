import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient,

  ) { }

  executeJWTAuthenticationService(username: string, password: string) {
    return this.http.post<any>(`${API_URL}/authenticate`, {
      username, 
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

  // Basic Authentication
  executeBasicAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    console.log(header)
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,
    {headers : header}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    );
  }

  // Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/in28minutes' 
  // from origin 'http://localhost:4200' has been blocked by CORS policy: 
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }
  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN)
    }
    return null
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
