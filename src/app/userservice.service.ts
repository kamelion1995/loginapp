import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  
  baseUrl="http://localhost:8083";

  constructor(private http:HttpClient) { }

  getUser(){
    this.http.get(`${this.baseUrl}/getUsers`);
  }
}
