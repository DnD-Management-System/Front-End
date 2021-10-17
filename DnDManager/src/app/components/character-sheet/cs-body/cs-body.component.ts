import { Component, Input, OnInit } from '@angular/core';
import { Player } from "../../../models/temp-models/Player";
import { EditCharacterComponent } from "../edit-character/edit-character.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-cs-body',
  templateUrl: './cs-body.component.html',
  styleUrls: ['./cs-body.component.css']
})
export class CsBodyComponent implements OnInit {

  @Input()
  player!:Player;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editCharacter() {
    this.dialog.open(EditCharacterComponent, {
      data: {
        player: this.player
      }
    })
  }

}
