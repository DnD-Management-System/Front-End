import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Money } from "../../../../models/temp-models/player-subobjects/Money";

@Component({
  selector: 'app-cs-inventory',
  templateUrl: './cs-inventory.component.html',
  styleUrls: ['./cs-inventory.component.css']
})
export class CsInventoryComponent implements OnInit {

  @Input()
  moneyPouch:Money[] = [];

  displayedColumns:string[] = ['name', 'value'];
  dataSource = new MatTableDataSource<Money>();

  constructor() { }

  ngOnInit(): void {
    this.getTotal();
    this.dataSource.data = this.moneyPouch;
  }

  getTotal() {
    let total:number = 0;
    for(let money of this.moneyPouch) {
      switch (money.name.toLowerCase()) {
        case "cp":
          total += money.value / 100;
          break;
        case "sp":
          total += money.value / 10;
          break;
        case "ep":
          total += money.value / 2;
          break;
        case "gp":
          total += money.value;
          break;
        case "pp":
          total += money.value * 10;
          break;
      }
    }
    this.moneyPouch.push(new Money("Total (gp)", total));
  }

}
