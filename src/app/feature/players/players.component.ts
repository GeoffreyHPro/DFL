import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from '../../share/menu/menu.component';
import { GenericTableComponent } from '../../share/generic-table/generic-table.component';
import { SearchBarComponent } from '../../share/search-bar/search-bar.component';
import { Subscription } from 'rxjs';
import { PlayersService } from '../../core/repository/playersRepository.service';
import { playerDto } from '../../core/dto/playerDto';
import { PlayersActionService } from '../../core/action/players-action.service';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [MenuComponent, GenericTableComponent],
  providers: [SearchBarComponent],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  @ViewChild(SearchBarComponent) SearchBarComponent!: SearchBarComponent;
  searchValue: string = "";

  subscription = new Subscription();

  players: playerDto[] = [];

  constructor(
    private playersService: PlayersService,
    public playersActionService: PlayersActionService
  ) {
    this.playersService.getPlayers().subscribe(players => {
      this.players = players
      console.log(players);
    });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}