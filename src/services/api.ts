import axios from "axios";

export const api = axios.create({
    baseURL: "https://treinamentoapi.codejr.com.br/api",
})