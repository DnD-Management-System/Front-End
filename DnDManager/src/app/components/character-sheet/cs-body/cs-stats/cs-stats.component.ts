import { Component, Input, OnInit } from '@angular/core';
import { Ability } from "../../../../models/temp-models/player-subobjects/Ability";
import { Skill } from "../../../../models/temp-models/player-subobjects/Skill";

@Component({
  selector: 'app-cs-stats',
  templateUrl: './cs-stats.component.html',
  styleUrls: ['./cs-stats.component.css']
})
export class CsStatsComponent implements OnInit {

  @Input()
  abilities:Ability[] = [];

  @Input()
  skills:Skill[] = [];

  skillMap:Map<Ability, Skill[]> = new Map<Ability, Skill[]>();

  constructor() { }

  ngOnInit(): void {
    for(let ability of this.abilities) {
      let abilitySkills:Skill[] = [];
      let skillIndex:number = 0;
      for(let skill of this.skills) {
        if(skill.ability === ability.name) {
          abilitySkills[skillIndex] = skill;
          skillIndex++;
        }
      }
      this.skillMap.set(ability, abilitySkills);
    }
  }
}
