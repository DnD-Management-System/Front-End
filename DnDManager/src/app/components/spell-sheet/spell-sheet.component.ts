import { Component, Input, OnInit } from '@angular/core';
import { Spell } from "../../models/temp-models/Spell";

@Component({
  selector: 'app-spell-sheet',
  templateUrl: './spell-sheet.component.html',
  styleUrls: ['./spell-sheet.component.css']
})
export class SpellSheetComponent implements OnInit {

  @Input()
  spells:Spell[] = [];

  spellMap: Map<number, Spell[]> = new Map<number, Spell[]>();

  constructor() {

  }

  ngOnInit(): void {
    for(let i = 0; i < 10; i++) {
      let levelSpells:Spell[] = [];
      let spellIndex = 0;
      for(let spell of this.spells) {
        if(spell.level === i) {
          levelSpells[spellIndex] = spell;
          spellIndex++;
        }
      }
      this.spellMap.set(i, levelSpells);
    }
  }

}
