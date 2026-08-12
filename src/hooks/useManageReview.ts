import { useEffect, useState } from "react";

import { Review } from "@/types/review";
import { User } from "@/types/user";
import { getMe } from "@/services/auth";

type ModalType = "view" | "edit" | "delete" | null;

export function useManageReview() {

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

    async function loadLoggedUser(){
        try {
            const userResponse = await getMe();
            setLoggedUser(userResponse.user);
        } catch (error) {
            
            console.error(
                "Erro ao carregar informações do usuário logado",
                error
            );
            
        } finally {
            setLoadingUserData(false);
        }
    }

    useEffect(() => {
        loadLoggedUser();
    }, []);

    return {
        selectedReview,
        setSelectedReview,
        modal,
        setModal,
        handleView,
        handleEdit,
        handleDelete,
        closeModal,
        loggedUser,
        loadingUserData,
    };
}