import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { playerDto } from '../../core/dto/playerDto';

@Component({
  selector: 'app-stats-player',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './stats-player.component.html',
  styleUrl: './stats-player.component.css'
})
export class StatsPlayerComponent {
  @Input() player!: playerDto;
  categories: any;


  ngOnInit() {
    this.categories = [
      {
        title: '🧤 Goal',
        stats: [
          { name: 'Réflexes', value: this.player.playerStats.goalKeeperReflexe },
          { name: 'Plongeons', value: this.player.playerStats.goalKeeperDiving }
        ]
      },
      {
        title: '🛡 Défense',
        stats: [
          { name: 'Tacle', value: this.player.playerStats.defense },
          { name: 'Interception', value: this.player.playerStats.interception }
        ]
      },
      {
        title: '🧠 Milieu',
        stats: [
          { name: 'Passes', value: this.player.playerStats.passes },
          { name: 'Dribble', value: this.player.playerStats.dribble },
          { name: 'LongShot', value: this.player.playerStats.longShot }
        ]
      },
      {
        title: '🎯 Attaquant',
        stats: [
          { name: 'Shot power', value: this.player.playerStats.shotPower },
          { name: 'Finishing', value: this.player.playerStats.finishing }
        ]
      },
    ];
  }

  getColorClass(value: number): string {
    if (value >= 18) return 'stat-18';
    if (value >= 15) return 'stat-15';
    if (value >= 13) return 'stat-13';
    if (value >= 10) return 'stat-10';
    if (value >= 7) return 'stat-7';
    if (value >= 5) return 'stat-5';
    return 'stat-3';
  }
}
