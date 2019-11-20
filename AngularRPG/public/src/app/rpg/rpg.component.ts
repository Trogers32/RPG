import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from "@angular/router";

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
  charInfo;
  characters;
  KEY_CODE = {
    RIGHT_ARROW : 39,
    LEFT_ARROW : 37,
    ENTER: 13
  }

  constructor(private router:Router) {
    this.characters = {
      rogue : {
        description:"A shifty rogue. Raised on the streets and proficient in subtlety and finesse.", 
        right:"knight", 
        left:"mage" 
      },
      mage : {
        description:"An intelligent mage. Schooled in the arts of spellcraft.", 
        right:"rogue", 
        left:"knight"
      },
      knight : {
        description:"A strong fighter. Trained for armored combat.", 
        right: "mage", 
        left:"rogue"
      }
    }
    
  }

  ngOnInit() {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === this.KEY_CODE.RIGHT_ARROW) {
      this.change("right");
    }
    if (event.keyCode === this.KEY_CODE.LEFT_ARROW) {
      this.change("left");
    }
    if (event.keyCode === this.KEY_CODE.ENTER) {
      if(this.charInfo){
        if(this.charInfo == this.characters.knight){
          this.router.navigate(['Start/Knight']);
        } else if(this.charInfo == this.characters.mage){
          this.router.navigate(['Start/Mage']);
        } else if(this.charInfo == this.characters.rogue){
          this.router.navigate(['Start/Rogue']);
        }
      }
    }
  }

  selectCharacter(selection){
    this.charInfo = this.characters[selection];
  }

  change(direction){
    if(this.charInfo){
      this.charInfo = this.characters[this.charInfo[direction]];
    } else {
      this.charInfo = this.characters.knight;
    }
  }

  choose(){
    if(this.charInfo){
      if(this.charInfo == this.characters.knight){
        this.router.navigate(['Start/Knight']);
      } else if(this.charInfo == this.characters.mage){
        this.router.navigate(['Start/Mage']);
      } else if(this.charInfo == this.characters.rogue){
        this.router.navigate(['Start/Rogue']);
      }
    }
  }
}
