import { playerStatsDto } from "./playerStatsDto";

export interface playerDto {
    lastName: string,
    firstName: string,
    country: string,
    overall: number,
    stats: playerStatsDto
}