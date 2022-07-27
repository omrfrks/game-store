import { Component, Input } from '@angular/core';
import  { GameService } from '../../game.service';
@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent{
  @Input() searchText: string = "";
  constructor(public gameService: GameService) { }

}
