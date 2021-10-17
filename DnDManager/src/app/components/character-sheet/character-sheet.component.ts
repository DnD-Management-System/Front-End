import { Component, OnInit } from '@angular/core';
import { Character } from "../../models/temp-models/Character";
import { Router } from "@angular/router";

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  player!:Character;

  constructor(private router: Router) {
    let temp:any = this.router.getCurrentNavigation();
    this.player = temp.extras.state.player;
    if(!this.player) {
      this.router.navigate(['dashboard']);
    }
  }

  ngOnInit(): void {

  }

}
