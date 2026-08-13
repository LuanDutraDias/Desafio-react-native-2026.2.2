import { useContext, useEffect, useState } from "react";

import { Review } from "@/types/review";
import { User } from "@/types/user";
import { getMe } from "@/services/auth";
import { AuthContext } from "@/contexts/authContext";

type ModalType = "view" | "edit" | "delete" | null;

export function useManageReview() {

    const { user } = useContext(AuthContext);

    const [selectedReview, setSelectedReview] = useState<Review | null>(null);
    const [modal, setModal] = useState<ModalType>(null);
    const [loadingUserData, setLoadingUserData] = useState(true);
    const [loggedUser, setLoggedUser] = useState<User | null>(null)

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
        user,
    };
}