import { api } from "./api";

type RegisterRequest = {
    name: string;
    email: string;
    password: string;
};

type LoginRequest= {
    email: string;
    password: string;
}

export async function register(data: RegisterRequest){
    const response = await api.post("/register", data);

    return response.data;
}

export async function login(data: LoginRequest){
    const response = await api.post("/login", data);

    return response.data;
}