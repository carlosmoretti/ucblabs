import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.config';

@Injectable({
  providedIn: 'root'
})

export class AgendaapiService {
  constructor(private http: HttpClient, private configuracao: AppSettings) { }

  GetAllProfessores() {
    return this.http.get(this.configuracao.getApiUrl("/agenda/professores"));
  }

}
