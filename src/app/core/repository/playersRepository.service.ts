import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { playerDto } from '../dto/playerDto';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private url = "http://localhost:8080/players/light";

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<playerDto[]> {
    return this.http.get<playerDto[]>(this.url, {});
  }
}