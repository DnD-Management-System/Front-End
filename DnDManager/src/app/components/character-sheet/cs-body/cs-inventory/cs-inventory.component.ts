import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Money } from "../../../../models/temp-models/player-subobjects/Money";
import { MatDialog } from "@angular/material/dialog";
import { EditMoneyComponent } from "../../edit-character/edit-money/edit-money.component";

@Component({
  selector: 'app-cs-inventory',
  templateUrl: './cs-inventory.component.html',
  styleUrls: ['./cs-inventory.component.css']
})
export class CsInventoryComponent implements OnInit {

  @Input()
  moneyPouch:Money[] = [];

  @Output()
  updatedMoneyEvent = new EventEmitter<Money[]>();

  displayedColumns:string[] = ['name', 'value'];
  dataSource = new MatTableDataSource<Money>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTotal();
    this.dataSource.data = this.moneyPouch;
  }

  getTotal() {
    while(this.moneyPouch.length > 5) {
      this.moneyPouch.pop();
    }
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

  openEditDialog() {
    const dialogRef = this.dialog.open(EditMoneyComponent, {
      data: {
        money: this.moneyPouch
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'update') {
        this.updatedMoneyEvent.emit(result.data);
      }
    });
  }

}
