import { Injectable } from '@angular/core';
import { TipoPerfil } from './tipoperfil';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'},
  )
};
const apiUrl = "http://localhost:26142/api/agenda";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  AddTipoPerfil(tipoperfil) {
    return this.http.post(apiUrl, tipoperfil);
  }

  GetAll() {
    return this.http.get(apiUrl);
  }

  Remove(id) {
    var options = {
      headers: new HttpHeaders(
        {'Content-Type': 'application/json'},
      ),
      body: {
        id: id
      }
    }
    return this.http.delete(`${apiUrl}/${id}`);
  }

  Get(id) {
    return this.http.get(`${apiUrl}/${id}`);
  }
}
