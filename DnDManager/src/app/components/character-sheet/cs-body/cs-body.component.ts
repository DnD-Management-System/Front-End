import { Component, Input, OnInit } from '@angular/core';
import { Character } from "../../../models/temp-models/Character";
import { MatDialog } from "@angular/material/dialog";
import { Vitals } from "../../../models/temp-models/player-subobjects/Vitals";
import { Money } from "../../../models/temp-models/player-subobjects/Money";
import { EditVitalsComponent } from "../edit-character/edit-vitals/edit-vitals.component";
import { EditMoneyComponent } from "../edit-character/edit-money/edit-money.component";

@Component({
  selector: 'app-cs-body',
  templateUrl: './cs-body.component.html',
  styleUrls: ['./cs-body.component.css']
})
export class CsBodyComponent implements OnInit {

  @Input()
  character!:Character;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateVitals(newVitals: Vitals) {
    this.character.vitals = newVitals;
  }

  updateMoney(newMoney: Money[]) {
    this.character.moneyPouch = newMoney;
  }

  openVitalsEditDialog() {
    const dialogRef = this.dialog.open(EditVitalsComponent, {
      data: {
        vitals: this.character.vitals
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'update') {
        this.character.vitals = result.data;
      }
    });
  }

  openMoneyEditDialog() {
    const dialogRef = this.dialog.open(EditMoneyComponent, {
      data: {
        money: this.character.moneyPouch
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'update') {
        this.character.moneyPouch = result.data;
      }
    });
  }

  openAbilitiesEditDialog() {

  }

  openActionsEditDialog() {

  }

  openTraitsEditDialog() {

  }

  openProficienciesEditDialog() {

  }

  openFeaturesEditDialog() {

  }

}
