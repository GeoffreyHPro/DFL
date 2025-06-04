import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-match',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './match.component.html',
  styleUrl: './match.component.css'
})
export class MatchComponent {
  display():void{
    alert("bonjour");
  }
}
