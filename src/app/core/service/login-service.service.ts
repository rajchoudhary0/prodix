import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }
  loginUser(username, password){
    const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = `username=${username}&password=${password}`;
    const result:any = [{"username":"wasim","password":"123","token":"abcaef4w9-e93jdvnmoaoi"}];
    return result;
    
  }
  isloggedIn() {
      return !!localStorage.getItem('token');
  }
  getToken() {
      return localStorage.getItem('token');
  }
}

