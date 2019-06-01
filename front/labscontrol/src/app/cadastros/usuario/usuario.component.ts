import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public tiposperfil: any;
  public titulo: string;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.titulo = "Usuários cadastrados."
  }

  GetAllTipoPerfil() {
    return this.api.GetAllTipoPerfil()
      .subscribe(d=> { this.tiposperfil = d["data"]});
  }
}
