import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cs-app-ability-card',
  templateUrl: './cs-ability-card.component.html',
  styleUrls: ['./cs-ability-card.component.css']
})
export class CsAbilityCardComponent implements OnInit {

  @Input()
  ability?:string;

  @Input()
  skills:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
