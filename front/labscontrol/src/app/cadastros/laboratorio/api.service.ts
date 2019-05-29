import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const apiUrl = "http://localhost:26142/api/laboratorio";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  AddLaboratorio(frm) {
    console.log(frm);

    var obj = {
      Sala: frm.value.Sala,
      Capacidade: frm.value.Capacidade
    }

    return this.http.post(apiUrl, obj);
  }

  GetAll() {
    return this.http.get(apiUrl);
  }

  RemoverLaboratorio(id) {
    return this.http.delete(`${apiUrl}/${id}`);
  }

}
