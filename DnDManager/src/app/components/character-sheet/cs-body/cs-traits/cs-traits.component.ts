import { Component, Input, OnInit } from '@angular/core';
import { Traits } from "../../../../models/temp-models/player-subobjects/Traits";

@Component({
  selector: 'app-cs-traits',
  templateUrl: './cs-traits.component.html',
  styleUrls: ['./cs-traits.component.css']
})
export class CsTraitsComponent implements OnInit {

  @Input()
  traits!:Traits;

  constructor() { }

  ngOnInit(): void {
  }

}
