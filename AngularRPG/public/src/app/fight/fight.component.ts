import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {
  charSel = "h-50 w-100 border border-dark row ml-3";
  sideText = "h-100 border border-dark d-inline-block";
  mainArea = "col-9 h-100 w-75 d-inline-block";
  mainContainer = "row w-100 border border-dark p-3";

  constructor() { }

  ngOnInit() {
  }

}
