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

  AlertError(mensagem) {
    Swal.fire("Ops...", mensagem, "error");
  }

  ShowError(coderro) {
    var errosColumns = [];
    var mensagem = "";

    console.log(coderro);

    for(var i in coderro.error) {
      if(coderro.error[i][0].indexOf("tório") > -1) {
        mensagem += coderro.error[i][0] + "<hr/>";
      }
    }

    if(mensagem == "")
      mensagem = "Encontramos alguns problemas, verifique todos os campos e tente novamente.";

    Swal.fire({
      title: "Ops...",
      type: "error",
      html: mensagem
    })
  }

  RemoveWithMessage(entidade, funcao, id, getAll) {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Você estará removendo este " + entidade + ".",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, desejo remover.',
      cancelButtonText: "Cancelar",
    }).then(e=> {
      if(e.value) {
        funcao(id)
          .subscribe(d=> {
            new AlertsComponent().ShowSwalAlert(d);
            getAll();
          })
      }
    })
  }

}
