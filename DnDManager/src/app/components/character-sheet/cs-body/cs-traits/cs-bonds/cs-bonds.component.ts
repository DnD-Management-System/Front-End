import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-cs-bonds',
  templateUrl: './cs-bonds.component.html',
  styleUrls: ['./cs-bonds.component.css']
})
export class CsBondsComponent implements OnInit {

  @Input()
  bonds: string[] = [];

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<string>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.bonds;
  }

}
