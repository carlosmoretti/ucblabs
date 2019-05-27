import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = "http://localhost:26142/api/fornecedor";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  GetAll() {
    return this.http.get(apiUrl);
  }

  AdicionarFornecedor(obj) {
    const objeto = {
      Nome: obj.value.Nome
    }
    return this.http.post(apiUrl, objeto);
  }

  RemoverFornecedor(obj) {
    return this.http.delete(`${apiUrl}/${obj}`);
  }


}
