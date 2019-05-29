import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service';
import { AlertsComponent } from '../../alerts/alerts.component';
import { GridComponent } from '../../grid/grid.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  constructor(private api: ApiService) { }

  public registros: any;
  public totalitens: any;
  public config: any;
  

  public titulo: string;
  public Disciplina = new FormGroup({
    Nome: new FormControl('')
  })

  ngOnInit() {
    this.GetAll();
    this.config = new GridComponent().GridConfiguration(this.totalitens);
    this.titulo = "Cadastrar Disciplina";
  }

  AdicionarDisciplina(obj) {

    if(obj.value.Nome == "")
      new AlertsComponent().AlertError("A disciplina precisa de um nome.");

    this.api.AdicionarDisciplina(obj)
      .subscribe(d=> {
        this.GetAll();
        new AlertsComponent().ShowSwalAlert(d);
      })
  }

  GetAll() {
    this.api.GetAll()
      .subscribe(d=> {
        this.registros = d["data"],
        this.totalitens = d["total"]
      })
  }

  RemoverDisciplina(id) {
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
        this.api.RemoverDisciplina(id)
        .subscribe(d=> {
          new AlertsComponent().ShowSwalAlert(d);
          this.GetAll();
        })
      }
    })
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
