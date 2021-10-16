import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-cs-flaws',
  templateUrl: './cs-flaws.component.html',
  styleUrls: ['./cs-flaws.component.css']
})
export class CsFlawsComponent implements OnInit {

  @Input()
  flaws: string[] = [];

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<string>();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.flaws;
  }

}
