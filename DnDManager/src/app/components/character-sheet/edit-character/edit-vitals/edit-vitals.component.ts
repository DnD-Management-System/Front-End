import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Vitals } from "../../../../models/temp-models/player-subobjects/Vitals";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-edit-vitals',
  templateUrl: './edit-vitals.component.html',
  styleUrls: ['./edit-vitals.component.css']
})
export class EditVitalsComponent implements OnInit {

  inputVitals!:Vitals;

  basicInfo!: FormGroup;
  gameplayVitals!: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditVitalsComponent>,
              private _formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public VitalsData: any) {
    this.inputVitals = VitalsData.vitals;
  }

  ngOnInit(): void {
    this.basicInfo = this._formBuilder.group({
      class: [this.inputVitals.clazz, Validators.required],
      level: [this.inputVitals.level, Validators.required],
      player: [this.inputVitals.player, Validators.required],
      race: [this.inputVitals.race, Validators.required],
      alignment: [this.inputVitals.alignment, Validators.required]
    });
    this.gameplayVitals = this._formBuilder.group({
      ac: [this.inputVitals.armorClass, Validators.required],
      initiative: [this.inputVitals.initiative, Validators.required],
      speed: [this.inputVitals.speed, Validators.required],
      hp: [this.inputVitals.totalHp, Validators.required],
      hitDice: [this.inputVitals.hitDice, Validators.required]
    });
  }

  submitChanges() {
    let outputVitals: Vitals = new Vitals(this.inputVitals.vitalsId, this.basicInfo.get('class')?.value, this.basicInfo.get('level')?.value,
      this.basicInfo.get('player')?.value, this.basicInfo.get('race')?.value,
      this.basicInfo.get('alignment')?.value, this.gameplayVitals.get('ac')?.value,
      this.gameplayVitals.get('initiative')?.value, this.inputVitals.currentHitDice,
      this.gameplayVitals.get('hitDice')?.value, this.inputVitals.currentHp,
      this.gameplayVitals.get('hp')?.value, 100, this.gameplayVitals.get('speed')?.value,
      this.inputVitals.deathSaveSuccess, this.inputVitals.deathSaveFailure);

    this.dialogRef.close({event: 'update', data: outputVitals});
  }

  cancel() {
    this.dialogRef.close({event: 'close'});
  }

}
