import { Component, Input, OnInit } from '@angular/core';
import { Spell } from "../../../models/temp-models/Spell";

@Component({
  selector: 'app-spell-level',
  templateUrl: './spell-level.component.html',
  styleUrls: ['./spell-level.component.css']
})
export class SpellLevelComponent implements OnInit {

  @Input()
  spells: Spell[] = [];

  @Input()
  level!: number;



  constructor() { }

  ngOnInit(): void {
  }



}
