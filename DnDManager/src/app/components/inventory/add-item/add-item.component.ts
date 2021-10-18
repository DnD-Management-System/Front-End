import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { CharacterService } from "../../../services/character.service";
import { Item } from "../../../models/temp-models/Item";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  itemGroup!: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddItemComponent>,
              public _formBuilder: FormBuilder,
              private characterService: CharacterService) { }

  ngOnInit(): void {
    this.itemGroup = this._formBuilder.group({
      name: ['', Validators.required],
      value: [''],
      weight: [''],
      description: ['']
    })
  }

  submitItem() {
    let item: Item = new Item(0, this.itemGroup.get('name')?.value, this.itemGroup.get('value')?.value,
                              this.itemGroup.get('weight')?.value, this.itemGroup.get('description')?.value, 0);

    this.dialogRef.close({ event: 'update', data: item });
  }

  close() {
    this.dialogRef.close({event: 'close'});
  }

}
