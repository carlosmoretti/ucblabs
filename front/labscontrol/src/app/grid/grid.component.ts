import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  GridConfiguration(total) {
    return {
      itemsPerPage: 10,
      currentPage: 1,
      totalItens: total
    }
  }

}
