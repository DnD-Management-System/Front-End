import { Component, Input, OnInit } from '@angular/core';
import { Player } from "../../../models/temp-models/Player";

@Component({
  selector: 'app-cs-body',
  templateUrl: './cs-body.component.html',
  styleUrls: ['./cs-body.component.css']
})
export class CsBodyComponent implements OnInit {

  @Input()
  player!:Player;

  constructor() { }

  ngOnInit(): void {
  }

}
