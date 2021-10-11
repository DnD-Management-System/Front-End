import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-header',
  templateUrl: './cs-header.component.html',
  styleUrls: ['./cs-header.component.css']
})
export class CsHeaderComponent implements OnInit {

  characterName:String = 'Placeholder Character';

  constructor() { }

  ngOnInit(): void {
  }

}
