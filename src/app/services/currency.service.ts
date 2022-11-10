import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

import { Observable } from 'rxjs';

export interface Currency {
    id: number;
    nombre: string;
}

@Injectable()
export class CurrencyService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCurrencysHttp(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`${this.baseUrl}/monedas`, {responseType:'json'});        
  }

}