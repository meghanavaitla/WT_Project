import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  serverUrl='http://localhost:3000/api';
  constructor(private http:HttpClient) { }
  getlogin(){
    console.log('data service called');
    return this.http.get(this.serverUrl+'/login');
  }
}
