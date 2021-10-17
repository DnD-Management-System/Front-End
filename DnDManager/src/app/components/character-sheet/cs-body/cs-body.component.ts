import { Component, Input, OnInit } from '@angular/core';
import { Character } from "../../../models/temp-models/Character";
import { MatDialog } from "@angular/material/dialog";
import { Vitals } from "../../../models/temp-models/player-subobjects/Vitals";
import { Money } from "../../../models/temp-models/player-subobjects/Money";

@Component({
  selector: 'app-cs-body',
  templateUrl: './cs-body.component.html',
  styleUrls: ['./cs-body.component.css']
})
export class CsBodyComponent implements OnInit {

  @Input()
  player!:Character;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateVitals(newVitals: Vitals) {
    this.player.vitals = newVitals;
  }

  updateMoney(newMoney: Money[]) {
    this.player.moneyPouch = newMoney;
  }

}
