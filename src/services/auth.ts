import { api } from "./api";

import { User } from "@/types/user";

type RegisterRequest = {
    name: string;
    email: string;
    password: string;
};

type LoginRequest = {
    email: string;
    password: string;
}

type MeResponse = {
    status: number;
    user: User;
};

export async function getMe(): Promise<MeResponse> {
    const response = await api.get("/me");

    return response.data;
}

export async function register(data: RegisterRequest){
    const response = await api.post("/register", data);

    return response.data;
}

export async function login(data: LoginRequest){
    const response = await api.post("/login", data);

    return response.data;
}

export async function logout() {
    const response = await api.post("/logout");

    console.log(response.data);

    return response;
}