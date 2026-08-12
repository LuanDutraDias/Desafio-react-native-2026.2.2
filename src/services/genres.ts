import {api} from "./api";
import { Genre } from "@/types/genre";

export async function getGenreById(id: number): Promise<Genre> {
    const response = await api.get(`/luan/genres/${id}`);

    return response.data;
}

export async function getGenres(): Promise<Genre[]> {
    const response = await api.get("/luan/genres");

    return response.data;

    
}