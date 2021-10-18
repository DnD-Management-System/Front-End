import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from "@angular/material/checkbox";
import { Vitals } from "../../../../models/temp-models/player-subobjects/Vitals";
import { MatDialog } from "@angular/material/dialog";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-cs-vitals',
  templateUrl: './cs-vitals.component.html',
  styleUrls: ['./cs-vitals.component.css']
})
export class CsVitalsComponent implements OnInit {

  @Input()
  vitals!:Vitals;

  @Output()
  updatedVitalsEvent = new EventEmitter<Vitals>();

  hitDiceBoxes!:FormGroup;

  constructor(public dialog: MatDialog, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.calcHeath();
    this.setHitDice()
  }

  calcHeath() {
    this.vitals.healthPercent = (this.vitals.currentHp / this.vitals.totalHp) * 100;
  }

  setHitDice() {

    let successes:boolean[] = [false, false, false];
    let fails:boolean[] = [false, false, false];

    for(let i = 0; i < this.vitals.deathSaveSuccess; i++) {
      successes[i] = true;
    }
    for(let i = 0; i < this.vitals.deathSaveFailure; i++) {
      fails[i] = true;
    }

    this.hitDiceBoxes = this._formBuilder.group({
      success1: [successes[0]],
      success2: [successes[1]],
      success3: [successes[2]],
      fail1: [fails[0]],
      fail2: [fails[1]],
      fail3: [fails[2]]
    })
  }

  deathSuccess(event:MatCheckboxChange) {
    if(event.checked) {
      this.vitals.deathSaveSuccess++;
    } else {
      this.vitals.deathSaveSuccess--;
    }
  }

  deathFailure(event:MatCheckboxChange) {
    if(event.checked) {
      this.vitals.deathSaveFailure++;
    } else {
      this.vitals.deathSaveFailure--;
    }
  }
}
