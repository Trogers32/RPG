import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public selectedChar: Event;

    constructor(private _httpService: HttpService, private router:Router){
        // this.router.navigate(['Start/Rogue']);
    }

}
