import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class eService {
  private apiUrl = 'https://open.er-api.com/v6/latest/ARS'; // URL de la API para el peso argentino

  constructor(private http: HttpClient) { }

  preciodolar(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}