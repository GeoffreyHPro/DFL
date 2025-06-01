import { Component } from '@angular/core';
import { MenuComponent } from "../../share/menu/menu.component";

@Component({
  selector: 'app-challenges',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.css'
})
export class ChallengesComponent {

}
