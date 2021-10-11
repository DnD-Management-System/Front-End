import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-details',
  templateUrl: './cs-details.component.html',
  styleUrls: ['./cs-details.component.css']
})
export class CsDetailsComponent implements OnInit {

  characterClass:String = 'Fighter';
  level:String = '1';
  background:String = 'Chosen One';
  player:String = 'Charlotte';
  race:String = 'Half-Orc';
  alignment:String = 'CG';
  experience:String = '0';

  constructor() { }

  ngOnInit(): void {
  }

}
