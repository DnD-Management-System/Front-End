import { Component, Inject, OnInit } from '@angular/core';
import { Spell } from "../../../../models/temp-models/Spell";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.css']
})
export class SpellCardComponent implements OnInit {

  spell!: Spell;

  constructor(@Inject(MAT_DIALOG_DATA) public inputSpell: any) {
    this.spell = inputSpell.spell;
  }

  ngOnInit(): void {
  }

}
