import { Component, OnInit } from '@angular/core';
import { Character } from "../../../models/temp-models/Character";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { MOCKPLAYERS } from "../../../models/temp-models/mock-players";
import { MatDialog } from "@angular/material/dialog";
import { EditCharacterComponent } from "../../character-sheet/edit-character/edit-character.component";

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.css']
})
export class PlayerDashboardComponent implements OnInit {

  players:Character[] = []
  displayedColumns: string[] = ['name', 'campaign'];
  dataSource = new MatTableDataSource<Character>();

  constructor(private router:Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.players = MOCKPLAYERS;
    this.dataSource.data = this.players;
  }

  tableClick(row:Character) {
    this.router.navigate(['character'], {state: {player : row}});
  }

  createCharacter() {
    this.dialog.open(EditCharacterComponent);
  }

}
