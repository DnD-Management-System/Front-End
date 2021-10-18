import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Flaw } from "../../../../../models/temp-models/player-subobjects/trait-subobjects/Flaw";

@Component({
  selector: 'app-cs-flaws',
  templateUrl: './cs-flaws.component.html',
  styleUrls: ['./cs-flaws.component.css']
})
export class CsFlawsComponent implements OnInit {

  @Input()
  flaws: Flaw[] = [];

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<Flaw>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.flaws;
  }

}
