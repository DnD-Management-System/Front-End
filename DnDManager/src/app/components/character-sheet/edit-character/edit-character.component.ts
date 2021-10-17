import { Component, Inject, OnInit } from '@angular/core';
import { Character } from "../../../models/temp-models/Character";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {

  player!:Character;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if(data) {
      this.player = data.player;
    }
}

  ngOnInit(): void {
  }

}
