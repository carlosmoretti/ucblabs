import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AgendaapiService } from '../agendaapi.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-agendamentodetail',
  templateUrl: './agendamentodetail.component.html',
  styleUrls: ['./agendamentodetail.component.css']
})
export class AgendamentodetailComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  constructor(private api: AgendaapiService) { }
  public titulo: string;

  public idSelProfessor: number;
  public selProfessor = '';
  public professores = [];

  public Agendamento = new FormGroup({
    Professor: new FormControl(''),
    Disciplina: new FormControl({value: '', disabled: true}),
    Laboratorio: new FormControl({value: '', disabled: true}),
  })

  ngOnInit() {
    this.blockUI.start();
    this.titulo = "Criar Agendamento";
    this.api.GetAllProfessores()
      .subscribe(d=> {
        this.blockUI.stop();

        var profs = [];
        profs = d["data"];

        this.professores = profs.map(function(item) {
          return `${item.nome} [${item.matricula}]`;
        })
      })
  }

  selecionaProfessor(res) {
    this.selProfessor = res;
    this.Agendamento.controls.Professor.disable(); 
    this.Agendamento.controls.Disciplina.enable();
  }
}
