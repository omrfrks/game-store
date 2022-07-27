import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameAddComponent } from './game-add/game-add.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'new-game', component: GameAddComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
