import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private searchValueSubject = new BehaviorSubject<string>('');
  searchValue$: Observable<string> = this.searchValueSubject.asObservable();

  constructor() { }

  getPlayers(): Promise<any> {
    return Promise.resolve(
      [
        {
          name: "Edouard",
          country: "France"
        },
        {
          name: "Junior Santos",
          country: "Brésil"
        },
        {
          name: "Javier Hernandez",
          country: "Espagne"
        },
        {
          name: "Lucas Diminiti",
          country: "Italie"
        },
        {
          name: "Gunter Grotze",
          country: "Allemagne"
        },
        {
          name: "Jack Rosenfield",
          country: "Angleterre"
        },
        {
          name: "Gunter Grotze",
          country: "Allemagne"
        },
        {
          name: "Jack Rosenfield",
          country: "Angleterre"
        },
        {
          name: "Gunter Grotze",
          country: "Allemagne"
        },
        {
          name: "Jack Rosenfield",
          country: "Angleterre"
        },
      ]
    );
  }

  setSearchObservable(search$: Observable<string>) {
    search$.subscribe(value => this.searchValueSubject.next(value));
  }
}
