import { Component, Inject, OnInit } from '@angular/core';
import { Player } from "../../../models/temp-models/Player";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {

  player!:Player;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if(data) {
      this.player = data.player;
    }
}

  ngOnInit(): void {
  }

}
