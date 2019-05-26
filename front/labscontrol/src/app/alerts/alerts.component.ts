import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { stringify } from '@angular/core/src/util';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  ShowSwalAlert(d) {
    var retorno = d["status"];
    var mensagem = d["mensagem"];
    var modalStatus = "";

    if(retorno == "NOK"){
      retorno = "Ops..."
      Swal.fire(retorno, mensagem, "error")
    }else{
      retorno = "Sucesso";
      Swal.fire(retorno, mensagem, "success")
    }
  }

}
