import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { GridComponent } from '../../grid/grid.component';
import { AlertsComponent } from '../../alerts/alerts.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public pessoas: any;
  public totalpessoas: any;
  public config: any;

  public titulo: string;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.titulo = "Usuários cadastrados."
    this.GetAllPessoas();
    this.config = new GridComponent().GridConfiguration(this.totalpessoas);
  }

  GetAllPessoas() {
    this.api.GetAllPessoas()
      .subscribe(d=> {
        console.log(d["data"]);
        this.pessoas = d["data"];
        this.totalpessoas = d["total"];
      })
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  Remove(id) {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Você estará removendo este tipo de perfil.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, desejo remover.',
      cancelButtonText: "Cancelar",
    }).then(e=> {
      if(e.value) {
        this.api.Remove(id)
        .subscribe(d=> {
          new AlertsComponent().ShowSwalAlert(d);
          this.GetAllPessoas();
        },
        e => {
          new AlertsComponent().ShowError(e);
        })
      }
    })
  }
}
