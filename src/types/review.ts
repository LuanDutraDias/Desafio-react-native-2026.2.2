export type Review = {
    id: number;
    usuario_id: number;
    jogo_id: number;
    plataforma_id: number;
    genero_id: number;
    nota: number;
    comentario: string;
    created_at: string;
    updated_at: string;
};