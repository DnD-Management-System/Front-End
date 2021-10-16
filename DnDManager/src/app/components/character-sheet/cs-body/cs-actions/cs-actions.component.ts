import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Action } from "../../../../models/temp-models/player-subobjects/Action";

@Component({
  selector: 'app-cs-actions',
  templateUrl: './cs-actions.component.html',
  styleUrls: ['./cs-actions.component.css']
})
export class CsActionsComponent implements OnInit {

  @Input()
  actions:Action[] = [];

  dataSource = new MatTableDataSource<Action>();


  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.actions;
  }


  columnsToDisplay = ['name', 'bonus', 'damage', 'type'];

}
