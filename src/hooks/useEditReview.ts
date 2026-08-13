import { useContext, useEffect, useState } from "react";

import { getMe } from "@/services/auth";
import { editReview } from "@/services/reviews";
import { Review } from "@/types/review";
import { useAppData } from "@/contexts/appDataContext"
import { AuthContext } from "@/contexts/authContext";

export function useEditReview(review: Review | null) {

    const { reloadReviews } = useAppData();
    const {user} = useContext(AuthContext);

    const [userId, setUserId] = useState<number | null>(null);
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        if (review) {
            setRating(String(review.nota));
            setComment(review.comentario);
        }
    }, [review]);

    async function handleEditReview(reviewId: number, gameId: number, onClose: () => void) {

        if (!reviewId) {
            console.log("Bloqueou: sem reviewId");
            return;
        }

        if (!user) {
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
                    usuario_id: user.id,
                    jogo_id: gameId,
                    nota: normalizedRating,
                    comentario: comment.trim(),
                });

                await reloadReviews();

                onClose();
                setRating("");
                setComment("");

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