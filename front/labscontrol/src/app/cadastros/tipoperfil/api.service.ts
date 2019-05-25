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
    this.http.post(apiUrl, tipoperfil)
      .subscribe(res => console.log(res));
  }
}
