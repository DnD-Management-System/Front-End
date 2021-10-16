import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from "@angular/material/checkbox";
import { Vitals } from "../../../../models/temp-models/player-subobjects/Vitals";

@Component({
  selector: 'app-cs-vitals',
  templateUrl: './cs-vitals.component.html',
  styleUrls: ['./cs-vitals.component.css']
})
export class CsVitalsComponent implements OnInit {

  @Input()
  vitals!:Vitals;

  constructor() { }

  ngOnInit(): void {
    this.calcHeath();
  }

  calcHeath() {
    this.vitals.healthPercent = (this.vitals.currentHp / this.vitals.totalHp) * 100;
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
