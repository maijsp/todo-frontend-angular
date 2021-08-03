import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    // console.log("Execute Hello World Bean Service")
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
  }

  executeHelloWorldServiceWithPathVariable(name: string) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let header = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    // console.log(header)
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`)
  }

  // Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/in28minutes' 
  // from origin 'http://localhost:4200' has been blocked by CORS policy: 
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.
  
  // createBasicAuthenticationHttpHeader() {
  //   let username = 'username';
  //   let password = 'password';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
  //   return basicAuthHeaderString;
  // }
}
