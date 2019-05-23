import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  public titulo:string;
  public recurso:string;

  ngOnInit() {
    this.titulo = "Últimos Agendamentos";
  }

}
