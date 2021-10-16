import { Component, Input, OnInit } from '@angular/core';
import { CsFeatureDetailsComponent } from "./cs-feature-details/cs-feature-details.component";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { Feature } from "../../../../models/temp-models/player-subobjects/Feature";

@Component({
  selector: 'app-cs-features',
  templateUrl: './cs-features.component.html',
  styleUrls: ['./cs-features.component.css']
})
export class CsFeaturesComponent implements OnInit {

  @Input()
  features:Feature[] = [];

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<Feature>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data = this.features;
  }

  openDialog(pickedFeature: Feature) {
    this.dialog.open(CsFeatureDetailsComponent, {
      data: {
        name: pickedFeature.name,
        description: pickedFeature.description
      }
    })
  }

}
