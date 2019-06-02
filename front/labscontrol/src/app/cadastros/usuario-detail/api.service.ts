import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const urlTipoPerfil = 'http://localhost:26142/api/agenda';
const urlDisciplina = "http://localhost:26142/api/Disciplina";
const urlPessoa = "http://localhost:26142/api/pessoa";
const urlAssociarTipoPerfil = "http://localhost:26142/api/UsuarioTipoPerfil"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  GetAllTipoPerfil() {
    return this.http.get(urlTipoPerfil);
  }

  GetAllDisciplina() {
    return this.http.get(urlDisciplina);
  }

  CadastrarPessoa(obj) {
    return this.http.post(urlPessoa, obj);
  }

}
