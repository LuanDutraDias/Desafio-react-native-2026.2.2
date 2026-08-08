import { useState } from "react";

type ModalType = "view" | "edit" | "delete" | null;

type Review = {
    id: string;
    title: string;
    rating: number;
    genre: string;
    image: any;
    updated: string;
};

export function useManageReview() {

    const [selectedReview, setSelectedReview] = useState<Review | null>(null);
    const [modal, setModal] = useState<ModalType>(null);

    function handleView(review: Review) {
        setSelectedReview(review);
        setModal("view");
    }

    function handleEdit(review: Review) {
        setSelectedReview(review);
        setModal("edit");
    }

    function handleDelete(review: Review) {
        setSelectedReview(review);
        setModal("delete");
    }

    function closeModal() {
        setModal(null);
        setSelectedReview(null);
    }

    return {
        selectedReview,
        setSelectedReview,
        modal,
        setModal,
        handleView,
        handleEdit,
        handleDelete,
        closeModal,
    };
}