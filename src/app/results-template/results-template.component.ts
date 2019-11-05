import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { EquilibriumResult } from '../array-equilibrium.service';

@Component({
  selector: 'app-results-template',
  templateUrl: './results-template.component.html',
  styleUrls: ['./results-template.component.scss']
})
export class ResultsTemplateComponent implements OnChanges {

  @Input()
  resultsArray;

  dataSource;
  displayedColumns;

  constructor() {
    this.displayedColumns = ['date', 'array', 'index', 'time'];
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.dataSource = new MatTableDataSource<EquilibriumResult>(this.resultsArray.slice().reverse());
  }
}
