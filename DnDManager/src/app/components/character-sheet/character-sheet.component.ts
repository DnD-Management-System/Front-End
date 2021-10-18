import { Component, OnInit } from '@angular/core';
import { Character } from "../../models/temp-models/Character";
import { Router } from "@angular/router";
import { CharacterService } from "../../services/character.service";
import { MOCKPLAYERS } from "../../models/temp-models/mock-players";

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  // name!:string;
  player!:Character;

  constructor(private router: Router, private characterService:CharacterService) {
    let temp:any = this.router.getCurrentNavigation();
    // this.name = temp.extras.state.name;

  }

  ngOnInit(): void {
    // this.getCharacterSheet();
    this.player = MOCKPLAYERS[0];
  }

  getCharacterSheet() {
    // this.characterService.selectCharacter(this.name).subscribe();
    this.characterService.getCharacterSheet().subscribe(
      (data) => {
        this.player = data;
      },
      (error) =>  {
        console.error('Error trying to get character info');
      }
    );
  }

}
