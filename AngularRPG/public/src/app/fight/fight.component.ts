import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
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
    scrollText = [];
    chosen;
    selection;
    choices;
    secondary;
    imageSrc;
    enemySrc;
    currentStats;
    enemyStats = {
        "Health": 100,
        "Attack": 5,
        "Crit": 5
    }
    stats = {
        "Knight": {"Health" : 200, "Attack": 20, "Crit": 5},
        "Mage": {"Health" : 100, "Attack": 40, "Crit": 5},
        "Rogue": {"Health" : 100, "Attack": 25, "Crit": 40}
    }
    KEY_CODE = {
        ENTER: 13,
        UP: 38,
        RIGHT_ARROW : 39,
        LEFT_ARROW : 37,
        DOWN: 40
    }

    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.chosen = params['char'];
            this.imageSrc = `../../assets/${this.chosen}/Idle/idle.gif`;
            this.currentStats = this.stats[this.chosen];
            console.log(this.currentStats)
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
        this.secondary = "Light Attack";
        this.enemySrc = `../../assets/Enemies/Human/Idle/idle.gif`;
    }

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (event.keyCode === this.KEY_CODE.UP) {
            this.selection = this.choices[this.selection].top;
        } else if (event.keyCode === this.KEY_CODE.DOWN) {
            this.selection = this.choices[this.selection].bottom;
        } else if (event.keyCode === this.KEY_CODE.LEFT_ARROW) {
            this.change("left");
        } else if (event.keyCode === this.KEY_CODE.RIGHT_ARROW) {
            this.change("right");
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

    change(dir){
        if(dir == "left"){
            this.secondary = "";
        } else {
            this.secondary = this.choices[this.selection].main[0];
        }
    }

    secondaryChoice(sel){
        if(this.selection == "Attack"){
            let critical = Math.floor(Math.random()*100)
            let damage;
            if(critical <= this.currentStats.Crit){
                damage = 2 * this.currentStats.Attack;
            } else {
                damage = this.currentStats.Attack;
            }
            if(sel == "Light Attack"){
                this.imageSrc = `../../assets/${this.chosen}/Attack/attack.gif`;
                setTimeout(() => {      ////////required to be () => for scope of 'this'
                    this.imageSrc = `../../assets/${this.chosen}/Idle/idle.gif`;
                }, 1000);
            } else {
                this.imageSrc = `../../assets/${this.chosen}/Attack_Extra/attack_strong.gif`;
                damage += 20;
                setTimeout(() => {      ////////required to be () => for scope of 'this'
                    this.imageSrc = `../../assets/${this.chosen}/Idle/idle.gif`;
                }, 1500);
            }
            this.enemySrc = `../../assets/Enemies/Human/Attack/attack.gif`;
            setTimeout(() => {      ////////required to be () => for scope of 'this'
                this.enemySrc = `../../assets/Enemies/Human/Idle/idle.gif`;
            }, 1500);
            this.enemyStats.Health -= damage;
            this.scrollText.unshift(`You made a ${this.secondary} and did ${damage} damage!`)
            if(critical <= this.enemyStats.Crit){
                damage = this.enemyStats.Attack * 2;
            } else {
                damage = this.enemyStats.Attack;
            }
            this.scrollText.unshift(`The enemy attacked you and did ${damage} damage!`)
            this.currentStats.Health -= damage;
        }
        this.secondary = sel;
    }
}


// transform: scaleX(-1);    mirror image