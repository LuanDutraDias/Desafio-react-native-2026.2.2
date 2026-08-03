import axios from "axios";
import * as SecureStore from "expo-secure-store";

export const api = axios.create({
    baseURL: "https://treinamentoapi.codejr.com.br/api",
});

api.interceptors.request.use(async (config) => {
    const token = await SecureStore.getItemAsync("token");

    console.log("TOKEN:", token);

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});