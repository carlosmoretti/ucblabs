import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlTipoPerfil = 'http://localhost:26142/api/agenda'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  GetAllTipoPerfil() {
    return this.http.get(urlTipoPerfil);
  }
}
