import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { PlayersService } from '../../core/repository/playersRepository.service';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css'
})
export class GenericTableComponent {
  customers: any = [];

  constructor(private playersService: PlayersService) {

  }

  ngOnInit() {
    this.playersService.getPlayers().then(value => this.customers = value);
  }
}
