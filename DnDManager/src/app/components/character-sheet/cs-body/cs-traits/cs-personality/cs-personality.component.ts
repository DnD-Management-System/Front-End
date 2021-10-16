import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-cs-personality',
  templateUrl: './cs-personality.component.html',
  styleUrls: ['./cs-personality.component.css']
})
export class CsPersonalityComponent implements OnInit {

  @Input()
  personality_traits: string[] = [];

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<string>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.personality_traits;
  }

}
