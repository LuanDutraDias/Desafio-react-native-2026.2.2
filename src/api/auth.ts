import { api } from "./api";

type RegisterRequest = {
    name: string;
    email: string;
    password: string;
};

export async function register(data: RegisterRequest){
    const response = await api.post("/register", data);

    return response.data;
}