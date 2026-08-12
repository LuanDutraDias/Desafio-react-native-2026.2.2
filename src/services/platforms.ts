import {api} from "./api";
import { Platform } from "@/types/platform";

export async function getPlatformById(id: number): Promise<Platform> {
    const response = await api.get(`/luan/platforms/${id}`);

    return response.data;
}

export async function getPlatforms(): Promise<Platform[]> {
    const response = await api.get("/luan/platforms");

    return response.data;
}