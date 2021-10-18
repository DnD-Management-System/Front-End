import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { PersonalityTrait } from "../../../../../models/temp-models/player-subobjects/trait-subobjects/PersonalityTrait";

@Component({
  selector: 'app-cs-personality',
  templateUrl: './cs-personality.component.html',
  styleUrls: ['./cs-personality.component.css']
})
export class CsPersonalityComponent implements OnInit {

  @Input()
  personality_traits: PersonalityTrait[] = [];

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<PersonalityTrait>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.personality_traits;
  }

}
