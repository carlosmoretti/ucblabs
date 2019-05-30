import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlTipo = "http://localhost:26142/api/tipoequipamento";
const urlEquipamento = "http://localhost:26142/api/equipamento";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  GetAllTipos() {
    return this.http.get(urlTipo);
  }

  GetAllEquipamento() {
    return this.http.get(urlEquipamento);
  }

  AddEquipamento(obj) {
    return this.http.post(urlEquipamento, obj);
  }

  AddTipoEquipamento(obj) {
    return this.http.post(urlTipo, obj);
  }

  RemoverEquipamento(obj) {
    return this.http.delete(`${urlEquipamento}/${obj}`);
  }

}
