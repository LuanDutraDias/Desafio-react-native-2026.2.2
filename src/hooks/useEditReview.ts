import { useEffect, useState } from "react";

import { getMe } from "@/services/auth";
import { editReview } from "@/services/reviews";
import { Review } from "@/types/review";

export function useEditReview(review: Review | null, onSuccess?: () => void) {

    const [userId, setUserId] = useState<number | null>(null);
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);

    
    async function loadLoggedUserData() {
        
        try {
            
            setLoading(true);     
            const meResponse = await getMe();     
            setUserId(meResponse.user.id);
            
        } catch (error) {
            
            console.error(
                "Erro ao carregar dados do usuário logado:",
                error
            );
            
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadLoggedUserData();
    }, []);

    useEffect(() => {
        if (review) {
            setRating(String(review.nota));
            setComment(review.comentario);
        }
    }, [review]);

    async function handleEditReview(reviewId: number, gameId: number) {

        if (!reviewId) {
            console.log("Bloqueou: sem reviewId");
            return;
        }

        if (!userId) {
            console.log("Bloqueou: sem userId");
            return;
        }

        if (!gameId) {
            console.log("Bloqueou: sem gameId");
            return;
        }

        const normalizedRating = Number(
            rating.trim().replace(",", ".")
        );

        if (!rating.trim() || Number.isNaN(normalizedRating)) {
            console.log("Bloqueou: rating inválido", normalizedRating);
            return;
        }

        if (!comment.trim()) {
            console.log("Bloqueou: sem comment");
            return;
        }

            try {

                setEditing(true);

                await editReview(reviewId, {
                    usuario_id: userId,
                    jogo_id: gameId,
                    nota: normalizedRating,
                    comentario: comment.trim(),
                });

                setRating("");
                setComment("");
                onSuccess?.();

            } catch (error) {

                console.error(
                    "Erro ao criar review:",
                    error
                );

            } finally {

                setEditing(false);

            }
        }

    return {
        loading,
        setLoading,
        editing,
        setEditing,
        rating,
        setRating,
        comment,
        setComment,
        handleEditReview,
    };
}