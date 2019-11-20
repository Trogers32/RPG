import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    chosen;
    selection;
    choices;
    secondary;
    KEY_CODE = {
        ENTER: 13,
        UP: 38,
        DOWN: 40
    }

    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
        this.chosen = params['char'];
        });
        this.choices = {
        "Attack": {
            main: ["Light Attack", "Strong Attack"],
            top: "Items",
            bottom: "Skills"
        },
        "Skills": {
            main: ["Heal", "Block"],
            top: "Attack",
            bottom: "Items"
        },
        "Items": {
            main: ["Health potion"],
            top: "Skills",
            bottom: "Attack"
        }
        }
        this.selection = "Attack";
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (event.keyCode === this.KEY_CODE.UP) {
            this.selection = this.choices[this.selection].top;
        } else if (event.keyCode === this.KEY_CODE.DOWN) {
            this.selection = this.choices[this.selection].bottom;
        }
        // if (event.keyCode === this.KEY_CODE.ENTER) {
        // }
    }

    clickedAbility(selected){
        this.selection = selected;
    }

    moveUp(){
        this.selection = this.choices[this.selection].top;
    }
    moveDown(){
        this.selection = this.choices[this.selection].bottom;
    }

    secondaryChoice(sel){
        this.secondary = sel;
    }
}
