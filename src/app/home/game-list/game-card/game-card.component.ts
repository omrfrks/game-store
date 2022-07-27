import { Component, OnInit, Input } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { Game } from 'src/app/model/game';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() game: Game|any = null;
  constructor(private gameService: GameService) { }
  deleteGame(name: string){
    this.gameService.deleteGame(name);
  }
  ngOnInit(): void {
  }

}
