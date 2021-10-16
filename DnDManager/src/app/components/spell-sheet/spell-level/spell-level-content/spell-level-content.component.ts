import { Component, Input, OnInit } from '@angular/core';
import { Spell } from "../../../../models/temp-models/Spell";
import { SpellCardComponent } from "../spell-card/spell-card.component";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-spell-level-content',
  templateUrl: './spell-level-content.component.html',
  styleUrls: ['./spell-level-content.component.css']
})
export class SpellLevelContentComponent implements OnInit {

  @Input()
  spells:Spell[] = [];

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<Spell>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data = this.spells;
  }

  openDialog(pickedSpell: Spell) {
    this.dialog.open(SpellCardComponent, {
      data: {spell: pickedSpell}
    })
  }

}
