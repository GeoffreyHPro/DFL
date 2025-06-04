import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { PlayersComponent } from './feature/players/players.component';
import { LeagueComponent } from './feature/league/league.component';
import { ChallengesComponent } from './feature/challenges/challenges.component';
import { PlayersDetailComponent } from './feature/players/players-detail/players-detail.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "players", component: PlayersComponent },
    { path: "players/:id/detail", component: PlayersDetailComponent },
    { path: "league", component: LeagueComponent },
    { path: "challenges", component: ChallengesComponent },
];