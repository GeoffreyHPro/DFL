import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private url = "http://localhost:8080/players";

  constructor(private http: HttpClient) { }

  getPlayers():Observable<any>{
    return this.http.get(this.url, {});
  }
}
