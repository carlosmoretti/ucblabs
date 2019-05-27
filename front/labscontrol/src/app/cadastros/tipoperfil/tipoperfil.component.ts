import { ViewChild, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2/swal.component'
import { AlertsComponent } from '../../alerts/alerts.component';
import Swal from 'sweetalert2';
import { GridComponent } from '../../grid/grid.component';

@Component({
  selector: 'app-tipoperfil',
  templateUrl: './tipoperfil.component.html',
  styleUrls: ['./tipoperfil.component.css']
})

export class TipoperfilComponent implements OnInit {

  config: any;

  constructor(private apiService: ApiService) { }

  public titulo: string;

  public frm = new FormGroup({
    Nome: new FormControl('')
  });

  public registrosExistentes;
  public totalItens: number;
  
  ngOnInit() {

    this.apiService.GetAll()
      .subscribe(d=> {
        this.registrosExistentes = d["data"];
        this.totalItens = parseInt(d["total"]);
      })

    this.config = new GridComponent().GridConfiguration(this.totalItens);
    this.titulo = "Cadastrar Tipo de Perfil";
  }

  addTipoPerfil(ret){
    const obj = {
      Nome: ret.value.Nome,
      id: 0
    }

    this.apiService.AddTipoPerfil(obj)
      .subscribe(d=> {
        new AlertsComponent().ShowSwalAlert(d);
        this.GetAll();
      });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  GetAll() {
    this.apiService.GetAll()
        .subscribe(d=> {
          this.registrosExistentes = d["data"];
          this.totalItens = parseInt(d["total"]);
        })
  }

  Remove(id) {
    var saida;
    this.apiService.Get(id)
      .subscribe(d=> {
        saida = d;
        console.log(d);
      });

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
        this.apiService.Remove(id)
        .subscribe(d=> {
          new AlertsComponent().ShowSwalAlert(d);
          this.GetAll();
        })
      }
    })
  }
}