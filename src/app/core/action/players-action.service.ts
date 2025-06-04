import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayersActionService {

  constructor(private router: Router) { }

  labels: any[] = [
    { field: 'firstName', header: 'Prénom' },
    { field: 'lastName', header: 'Nom' },
    { field: 'country', header: 'Pays' },
    { field: 'levelPlayer', header: 'Niveau' },
    { field: 'actions', header: 'Actions' }
  ]

  onAction(row: any) {
    this.router.navigate(['/players', row.id, 'detail']);
  }
}