import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { PlayersComponent } from './feature/players/players.component';
import { LeagueComponent } from './feature/league/league.component';
import { ChallengesComponent } from './feature/challenges/challenges.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "players", component: PlayersComponent },
    { path: "league", component: LeagueComponent },
    { path: "challenges", component: ChallengesComponent },
];