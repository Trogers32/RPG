import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.css']
})
export class RPGComponent implements OnInit {
  charSel = "h-50 w-100 border border-dark row ml-3";
  sideText = "h-100 border border-dark d-inline-block";
  mainArea = "col-9 h-100 w-75 d-inline-block";
  mainContainer = "row w-100 border border-dark p-3";
  knight = "A strong fighter. Trained for armored combat.";
  mage = "An intelligent mage. Schooled in the arts of spellcraft."
  rogue = "A shifty rogue. Raised on the streets and proficient in subtlety and finesse."
  charInfo;

  constructor() { }

  ngOnInit() {
  }

  selectCharacter(selection){
    this.charInfo = selection;
  }
}
