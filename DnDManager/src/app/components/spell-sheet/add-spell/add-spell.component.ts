import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { CharacterService } from "../../../services/character.service";
import { Spell } from "../../../models/temp-models/Spell";

@Component({
  selector: 'app-add-spell',
  templateUrl: './add-spell.component.html',
  styleUrls: ['./add-spell.component.css']
})
export class AddSpellComponent implements OnInit {

  spellGroup!: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddSpellComponent>,
              private _formBuilder: FormBuilder,
              private characterService: CharacterService) { }

  ngOnInit(): void {
    this.spellGroup = this._formBuilder.group({
      name: ['', Validators.required],
      level: ['', Validators.required],
      castTime: ['', Validators.required],
      range: ['', Validators.required],
      components: ['', Validators.required],
      duration: ['', Validators.required],
      school: ['', Validators.required],
      save: ['', Validators.required],
      damage: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  submitSpell() {
    let spell: Spell = new Spell(this.spellGroup.get('name')?.value, this.spellGroup.get('level')?.value,
                            this.spellGroup.get('castTime')?.value, this.spellGroup.get('range')?.value,
                            this.spellGroup.get('components')?.value, this.spellGroup.get('duration')?.value,
                            this.spellGroup.get('school')?.value, this.spellGroup.get('save')?.value,
                            this.spellGroup.get('damage')?.value, this.spellGroup.get('description')?.value);

    // this.characterService.createSpell(spell);
    this.dialogRef.close({event: 'update', data:spell});
  }

  close() {
    this.dialogRef.close({event: 'close'});
  }
}
