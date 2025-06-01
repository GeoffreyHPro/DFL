import { Component, ViewChild, viewChild } from '@angular/core';
import { MenuComponent } from '../../share/menu/menu.component';
import { GenericTableComponent } from '../../share/generic-table/generic-table.component';
import { SearchBarComponent } from '../../share/search-bar/search-bar.component';
import { Subscription } from 'rxjs';
import { PlayersService } from '../../core/repository/playersRepository.service';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [MenuComponent, GenericTableComponent, SearchBarComponent],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {
  @ViewChild(SearchBarComponent) SearchBarComponent!: SearchBarComponent;
  searchValue: string = "";

  subscription = new Subscription();

  constructor(private playersService: PlayersService) {
    this.subscription.add(this.playersService.searchValue$.subscribe(value => console.log("The : " + value)));
  }

  ngAfterViewInit() {
    this.playersService.setSearchObservable(this.SearchBarComponent.search$);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}