import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RPGComponent } from './rpg/rpg.component';
import { FightComponent } from './fight/fight.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';

const routes: Routes = [
  { path: '',component: RPGComponent },
  { path: 'Start/:char',component: FightComponent },
  { path: 'GameOver',component: LeaderBoardComponent },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: RPGComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
