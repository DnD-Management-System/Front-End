import { Component, OnInit } from '@angular/core';
import { Player } from "../../models/temp-models/Player";
import { Router } from "@angular/router";

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  player!:Player;

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
