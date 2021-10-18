import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Ideal } from "../../../../../models/temp-models/player-subobjects/trait-subobjects/Ideal";

@Component({
  selector: 'app-cs-ideals',
  templateUrl: './cs-ideals.component.html',
  styleUrls: ['./cs-ideals.component.css']
})
export class CsIdealsComponent implements OnInit {

  @Input()
  ideals: Ideal[] = [];

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<Ideal>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.ideals;
  }

}
