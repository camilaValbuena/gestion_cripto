import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

import { Observable } from 'rxjs';

export interface Manager {
    id: number;
    nombre: string;
}

@Injectable()
export class ManagerService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getManagersHttp(): Observable<Manager[]> {
    return this.http.get<Manager[]>(`${this.baseUrl}/gestoras`, {responseType:'json'});        
  }

}