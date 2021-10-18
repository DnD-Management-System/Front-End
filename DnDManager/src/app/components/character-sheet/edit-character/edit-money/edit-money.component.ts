import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Money } from "../../../../models/temp-models/player-subobjects/Money";

@Component({
  selector: 'app-edit-money',
  templateUrl: './edit-money.component.html',
  styleUrls: ['./edit-money.component.css']
})
export class EditMoneyComponent implements OnInit {

  inputMoney!:Money[];

  moneyGroup!: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditMoneyComponent>,
              private _formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public MoneyData: any) {
    this.inputMoney = MoneyData.money;
  }

  ngOnInit(): void {
    this.moneyGroup = this._formBuilder.group({
      'cp': [this.inputMoney[0].value, Validators.required],
      'sp': [this.inputMoney[1].value, Validators.required],
      'ep': [this.inputMoney[2].value, Validators.required],
      'gp': [this.inputMoney[3].value, Validators.required],
      'pp': [this.inputMoney[4].value, Validators.required]
    });
  }

  submitChanges() {
    let outputMoney: Money[] = [
      new Money('cp', this.moneyGroup.get('cp')?.value),
      new Money('sp', this.moneyGroup.get('sp')?.value),
      new Money('ep', this.moneyGroup.get('ep')?.value),
      new Money('gp', this.moneyGroup.get('gp')?.value),
      new Money('pp', this.moneyGroup.get('pp')?.value)
    ];

    this.dialogRef.close({event: 'update', data: outputMoney});
  }

  cancel() {
    this.dialogRef.close({event: 'close'});
  }

}
