import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players-detail',
  standalone: true,
  imports: [],
  templateUrl: './players-detail.component.html',
  styleUrl: './players-detail.component.css'
})
export class PlayersDetailComponent {
  playerId!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.playerId = this.route.snapshot.paramMap.get('id')!;
  }
}
