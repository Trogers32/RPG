import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service'; //////import service here
import { HttpClientModule } from '@angular/common/http'; ////allows http requests
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RPGComponent } from './rpg/rpg.component';
import { FightComponent } from './fight/fight.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';

@NgModule({
  declarations: [
    AppComponent,
    RPGComponent,
    FightComponent,
    LeaderBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
