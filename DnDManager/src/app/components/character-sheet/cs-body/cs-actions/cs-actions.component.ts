import { Component, OnInit } from '@angular/core';

export interface Action {
  name: string;
  attackBonus: string;
  damage: string;
  type: string;
}

const ACTIONS: Action[] = [
  {name: "longsword", attackBonus: "+0", damage: "1d8", type: "slashing"},
  {name: "Hand cRossBow", attackBonus: "+0", damage: "1d6", type: "piercing"}
]

@Component({
  selector: 'app-cs-actions',
  templateUrl: './cs-actions.component.html',
  styleUrls: ['./cs-actions.component.css']
})
export class CsActionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataSource = ACTIONS;
  columnsToDisplay = ['name', 'bonus', 'damage', 'type'];

}
