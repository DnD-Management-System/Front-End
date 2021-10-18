import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Bond } from "../../../../../models/temp-models/player-subobjects/trait-subobjects/Bond";

@Component({
  selector: 'app-cs-bonds',
  templateUrl: './cs-bonds.component.html',
  styleUrls: ['./cs-bonds.component.css']
})
export class CsBondsComponent implements OnInit {

  @Input()
  bonds: Bond[] = [];

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<Bond>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.bonds;
  }

}
