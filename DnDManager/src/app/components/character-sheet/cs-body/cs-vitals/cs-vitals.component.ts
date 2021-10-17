import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from "@angular/material/checkbox";
import { Vitals } from "../../../../models/temp-models/player-subobjects/Vitals";
import { MatDialog } from "@angular/material/dialog";
import { EditVitalsComponent } from "../../edit-character/edit-vitals/edit-vitals.component";

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

  constructor(public dialog: MatDialog) { }

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

  openEditDialog() {
    const dialogRef = this.dialog.open(EditVitalsComponent, {
      data: {
        vitals: this.vitals
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'update') {
       this.updatedVitalsEvent.emit(result.data);
      }
    });
  }
}
