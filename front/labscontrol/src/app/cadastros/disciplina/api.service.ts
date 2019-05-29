import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertsComponent } from 'src/app/alerts/alerts.component';

const apiUrl = 'http://localhost:26142/api/disciplina';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  AdicionarDisciplina(obj) {
    
    var disciplina = {
      Nome: obj.value.Nome
    }

    return this.http.post(apiUrl, disciplina);
  }

  GetAll() {
    return this.http.get(apiUrl);
  }

  RemoverDisciplina(obj) {
    return this.http.delete(`${apiUrl}/${obj}`);
  }

}
