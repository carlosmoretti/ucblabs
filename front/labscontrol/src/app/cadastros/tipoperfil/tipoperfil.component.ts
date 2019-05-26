import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2/swal.component'
import Swal from 'sweetalert2';
import { AlertsComponent } from '../../alerts/alerts.component'

@Component({
  selector: 'app-tipoperfil',
  templateUrl: './tipoperfil.component.html',
  styleUrls: ['./tipoperfil.component.css']
})
export class TipoperfilComponent implements OnInit {

  constructor(private apiService: ApiService, private http: HttpClient) { }

  public titulo: string;

  public frm = new FormGroup({
    Nome: new FormControl('')
  });

  public registrosExistentes;
  ngOnInit() {
    this.titulo = "Cadastrar Tipo de Perfíl";
    this.GetAll();
  }

  addTipoPerfil(ret){
    const obj = {
      Nome: ret.value.Nome,
      id: 0
    }

    this.apiService.AddTipoPerfil(obj)
      .subscribe(d=> {
        new AlertsComponent().ShowSwalAlert(d);
      });
  }

  GetAll() {
    this.apiService.GetAll()
      .subscribe(d=> {
        this.registrosExistentes = d;
        console.log(this.registrosExistentes);
      })
  }

}
