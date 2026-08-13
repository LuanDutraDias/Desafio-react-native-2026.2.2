import { useState } from "react";
import { deleteReview } from "@/services/reviews";
import { Review } from "@/types/review";
import { useAppData } from "@/contexts/appDataContext";

export function useDeleteReview(){

    const { reloadReviews } = useAppData();

    const [deleting, setDeleting] = useState(false);

    async function handleDeleteReview(review: Review, onClose: () => void) {
        if (!review) return;

        try {
            setDeleting(true);
            await deleteReview(review.id);
            await reloadReviews();
            onClose();
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