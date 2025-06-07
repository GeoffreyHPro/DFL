import { playerStatsDto } from "./playerStatsDto";

export interface playerDto {
    overall: number,
    lastName: string,
    firstName: string,
    country: string,
    levelPlayer: String
    playerStats: playerStatsDto
}