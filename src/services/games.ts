import { Game } from "@/types/game";
import {api} from "./api";

export async function getGames(): Promise<Game[]> {
    const response = await api.get("/luan/games");

    return response.data;
}

export async function getGameById(id: number): Promise<Game> {
    const response = await api.get(`/luan/games/${id}`);

    return response.data;
}