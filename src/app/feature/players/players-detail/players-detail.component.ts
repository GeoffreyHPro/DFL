import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuComponent } from "../../../share/menu/menu.component";
import { PlayersService } from '../../../core/repository/playersRepository.service';
import { GenericRadarComponent } from "../../../share/generic-radar/generic-radar.component";
import { playerDto } from '../../../core/dto/playerDto';
import { Location } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { StatsPlayerComponent } from "../../../share/stats-player/stats-player.component";

@Component({
  selector: 'app-players-detail',
  standalone: true,
  imports: [MenuComponent, GenericRadarComponent, ButtonModule, CardModule, StatsPlayerComponent],
  templateUrl: './players-detail.component.html',
  styleUrl: './players-detail.component.css'
})
export class PlayersDetailComponent {
  playerId!: string;
  player!: playerDto;

  values: number[] = [];
  labels: string[] = [];

  constructor(private route: ActivatedRoute,
    private playersRepositoryService: PlayersService,
    private location: Location
  ) { }

  ngOnInit() {
    this.playerId = this.route.snapshot.paramMap.get('id')!;

    this.playersRepositoryService.getPlayer(this.playerId).subscribe(playerDto => {
      console.log(playerDto)
      this.values = Object.values(playerDto.playerStats);
      this.labels = Object.keys(playerDto.playerStats);
      this.player = playerDto;
    });
  }

  goBack() {
    this.location.back();
  }
}
