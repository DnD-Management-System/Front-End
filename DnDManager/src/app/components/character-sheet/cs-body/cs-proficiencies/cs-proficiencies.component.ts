import { Component, Input, OnInit } from '@angular/core';
import { Proficiency } from "../../../../models/temp-models/player-subobjects/Proficiency";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-cs-proficiencies',
  templateUrl: './cs-proficiencies.component.html',
  styleUrls: ['./cs-proficiencies.component.css']
})
export class CsProficienciesComponent implements OnInit {

  @Input()
  proficiencies:Proficiency[] = [];

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<Proficiency>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.proficiencies;
  }

}
