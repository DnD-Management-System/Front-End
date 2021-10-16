import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-cs-feature-details',
  templateUrl: './cs-feature-details.component.html',
  styleUrls: ['./cs-feature-details.component.css']
})
export class CsFeatureDetailsComponent implements OnInit {

  name!:string;
  description!:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.name = data.name;
    this.description = data.description;
  }

  ngOnInit(): void {
  }

}
