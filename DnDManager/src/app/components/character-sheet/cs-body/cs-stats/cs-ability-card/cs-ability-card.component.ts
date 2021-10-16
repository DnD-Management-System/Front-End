import { Component, Input, OnInit } from '@angular/core';
import { Ability } from "../../../../../models/temp-models/player-subobjects/Ability";
import { Skill } from "../../../../../models/temp-models/player-subobjects/Skill";

@Component({
  selector: 'cs-app-ability-card',
  templateUrl: './cs-ability-card.component.html',
  styleUrls: ['./cs-ability-card.component.css']
})
export class CsAbilityCardComponent implements OnInit {

  @Input()
  ability!:Ability;

  @Input()
  skills:Skill[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
