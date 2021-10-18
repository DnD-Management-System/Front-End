import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { EditCharacterComponent } from "../../character-sheet/edit-character/edit-character.component";
import { CharacterService } from "../../../services/character.service";

export interface characterByCampaign {
  character:string;
  campaign:string;
}

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.css']
})
export class PlayerDashboardComponent implements OnInit {

  // players:Character[] = []
  characters:characterByCampaign[] = [];
  displayedColumns: string[] = ['name', 'campaign'];
  // dataSource = new MatTableDataSource<Character>();
  dataSource = new MatTableDataSource<characterByCampaign>();

  constructor(private router:Router, public dialog: MatDialog, private characterService:CharacterService) { }

  ngOnInit(): void {
    // this.players = MOCKPLAYERS;
    // this.dataSource.data = this.players;
    // this.getCharacters();
    this.characters = [{character: 'testCharacter', campaign: 'testCampaign'}]
    this.dataSource.data = this.characters;
  }

  tableClick(name:string) {
    this.characterService.selectCharacter(name).subscribe();
    // this.router.navigate(['character'], {state: {name : name}});
    this.router.navigate(['character']);

  }

  createCharacter() {
    this.dialog.open(EditCharacterComponent);
  }

  getCharacters() {
    this.characterService.getAllCharacters().subscribe(
      (data:any) => {
        this.characters = data;
      },
      (error) => {
        console.error('Error getting list of characters');
      }
    )
  }

}
