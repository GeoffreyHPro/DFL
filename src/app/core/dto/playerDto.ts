import { playerStatsDto } from "./playerStatsDto";

export interface playerDto {
    lastName: string,
    firstName: string,
    country: string,
    levelPlayer: String
    playerStats: playerStatsDto
}