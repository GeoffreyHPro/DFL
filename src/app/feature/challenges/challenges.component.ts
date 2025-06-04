import { Component } from '@angular/core';
import { MenuComponent } from "../../share/menu/menu.component";
import { MatchComponent } from "./match/match.component";

@Component({
  selector: 'app-challenges',
  standalone: true,
  imports: [MenuComponent, MatchComponent],
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.css'
})
export class ChallengesComponent {

}
