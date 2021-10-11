import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-stats',
  templateUrl: './cs-stats.component.html',
  styleUrls: ['./cs-stats.component.css']
})
export class CsStatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skillMap:Map<string, string[]> = new Map<string, string[]>([
    ['strength', ['athletics']],
    ['dexterity', ['acrobatics', 'sleight of hand', 'stealth']],
    ['constitution', []],
    ['intelligence', ['arcana', 'history', 'investigation', 'nature', 'religion']],
    ['wisdom', ['animal handling', 'insight', 'medicine', 'perception', 'survival']],
    ['charisma', ['deception', 'intimidation', 'performance', 'persuasion']]
  ]);



}
