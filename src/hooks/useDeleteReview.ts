import { useState } from "react";
import { deleteReview } from "@/services/reviews";
import { Review } from "@/types/review";

export function useDeleteReview(){
    const [deleting, setDeleting] = useState(false);

    async function handleDeleteReview(review: Review, onSuccess: () => void) {
        if (!review) return;

        try {
            setDeleting(true);
            await deleteReview(review.id);
            onSuccess();
        } catch (error) {
            console.error("Erro ao excluir review:", error);
        } finally {
            setDeleting(false);
        }
    }

    return {
        deleting,
        handleDeleteReview,
    }
}