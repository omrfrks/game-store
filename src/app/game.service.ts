import { Injectable } from '@angular/core';
import { Game } from './model/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  games: Game[] = [];
  newGameAdded: boolean = false;
  addGame(game: Game) {
    this.games.push(game);
    this.newGameAdded = true;
    setTimeout(() => {
      this.newGameAdded = false;
    }, 5000);
  }
  deleteGame(name: string) {
    this.games = this.games.filter((game) => game.name !== name);
  }
}
