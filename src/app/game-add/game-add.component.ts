import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css'],
})
// example working value for bundle BcBc1_.Bc
export class GameAddComponent {
  newGameForm: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
    bundle: new FormControl('', [
      Validators.pattern(/^([A-Za-z]{1}[A-Za-z\d_]*\.)+[A-Za-z][A-Za-z\d_]*$/),
      Validators.required,
    ]),
    owner: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  });

  constructor(private gameService: GameService, private router: Router) {}
  onSelect(event: Event): void {
    const file = (event.target as HTMLInputElement).files![0];
    var fReader = new FileReader();
    fReader.readAsDataURL(file);
    fReader.onloadend = (event) => {
      this.newGameForm.patchValue({ img: event.target?.result?.toString() });
    };
  }
  onSubmit(): void {
    this.gameService.addGame(this.newGameForm.value);
    this.newGameForm.reset();
    this.router.navigate(['']);
  }
}
