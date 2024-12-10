import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Userauth } from '../interfaces/userauth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = "https://api.escuelajs.co/api/v1/";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { console.log(this.apiURL); }

  checkUser(email: string, password: string): Observable<any>{
    return this.http.post<any>(this.apiURL + 'auth/login', {email: email, password: password}).pipe(map(res => res));
  }

  checkLogin(){
    if(localStorage.getItem('accessToken')){
      return true
    }
    return false   
  }

}
