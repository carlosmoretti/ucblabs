import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlPessoa = "http://localhost:26142/api/pessoa"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  GetAllPessoas() {
    return this.http.get(urlPessoa);
  }

  Remove(id) {
    return this.http.delete(`${urlPessoa}/${id}`);
  }
}
