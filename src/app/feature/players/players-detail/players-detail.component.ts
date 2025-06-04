import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuComponent } from "../../../share/menu/menu.component";
import { PlayersService } from '../../../core/repository/playersRepository.service';
import { GenericRadarComponent } from "../../../share/generic-radar/generic-radar.component";
import { playerDto } from '../../../core/dto/playerDto';

@Component({
  selector: 'app-players-detail',
  standalone: true,
  imports: [MenuComponent, GenericRadarComponent],
  templateUrl: './players-detail.component.html',
  styleUrl: './players-detail.component.css'
})
export class PlayersDetailComponent {
  playerId!: string;
  player!: playerDto;

  values: number[] = [];
  labels: string[] = [];

  constructor(private route: ActivatedRoute,
    private playersRepositoryService: PlayersService
  ) { }

  ngOnInit() {
    this.playerId = this.route.snapshot.paramMap.get('id')!;

    this.playersRepositoryService.getPlayer(this.playerId).subscribe(playerDto => {
      this.values = Object.values(playerDto.playerStats);
      this.labels = Object.keys(playerDto.playerStats);
      this.player = playerDto;
    });
  }
}
