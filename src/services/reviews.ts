import { api } from "./api";

type CreateReviewData = {
    usuario_id: number;
    jogo_id: number;
    nota: number;
    comentario: string;
};

type EditReviewData = {
    usuario_id: number;
    jogo_id: number;
    nota: number;
    comentario: string;
};

export async function getReview(){
    const response = await api.get("/luan/reviews");

    return response.data;
}

export async function createReview(data: CreateReviewData) {
    const response = await api.post("/luan/reviews", data);

    return response.data;
}

export async function deleteReview(id: number){
    const response = await api.delete(`/luan/reviews/${id}`);

    return response.data;
}

export async function editReview(id: number, data: EditReviewData){
    const response = await api.put(`/luan/reviews/${id}`, data);

    return response.data;
}
