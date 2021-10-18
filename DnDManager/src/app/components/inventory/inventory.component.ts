import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { Item } from "../../models/temp-models/Item";
import { AddItemComponent } from "./add-item/add-item.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  displayedColumns: string[] = ['name', 'value', 'weight', 'description']

  dataSource = new MatTableDataSource<Item>();

  @Input()
  inventory:Item[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource.data = this.inventory
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openNewItemDialog() {
    let dialogRef = this.dialog.open(AddItemComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'update') {
        this.inventory.push(result.data);
      }
    });
  }

}
