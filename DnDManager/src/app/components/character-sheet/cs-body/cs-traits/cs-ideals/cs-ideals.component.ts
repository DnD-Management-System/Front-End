import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-cs-ideals',
  templateUrl: './cs-ideals.component.html',
  styleUrls: ['./cs-ideals.component.css']
})
export class CsIdealsComponent implements OnInit {

  @Input()
  ideals: string[] = [];

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<string>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.ideals;
  }

}
