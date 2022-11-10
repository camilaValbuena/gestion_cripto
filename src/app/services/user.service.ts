import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "../../environments/environment";

import { Observable } from 'rxjs';

export interface User {
    id: number;
    nombre: string;
}

@Injectable()
export class UserService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUsersHttp(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/user`, {responseType:'json'});        
  }

  getUserIdHttp(id:number): Observable<User> {
    let params = new HttpParams();
    params = params.set('id',id);
    return this.http.get<User>(`${this.baseUrl}/userid`,{params});        
  }

}
