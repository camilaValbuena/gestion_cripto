import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

import { Observable } from 'rxjs';

export interface Country {
    id: number;
    nombre: string;
}

@Injectable()
export class CountryService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCountriesHttp(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/paises`, {responseType:'json'});        
  }

}
