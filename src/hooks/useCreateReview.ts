import { useContext, useEffect, useState } from "react";

import { Game } from "@/types/game";
import { Genre } from "@/types/genre";

import { getGames } from "@/services/games";
import { getGenreById } from "@/services/genres";
import { getMe } from "@/services/auth";
import { createReview } from "@/services/reviews";
import { useAppData } from "@/contexts/appDataContext";
import { AuthContext } from "@/contexts/authContext";
import { reload } from "expo-router/build/global-state/routing";

export function useCreateReview() {

    const { games, reloadReviews } = useAppData();
    const { user } = useContext(AuthContext);

    const [selectedGame, setSelectedGame] = useState<Game | null>(null);
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");
    const [loadingGenre, setLoadingGenre] = useState(false);
    const [publishing, setPublishing] = useState(false);

    async function handleSelectGame(game: Game) {

        try {

            setSelectedGame(game);

            setSelectedGenre(null);

            setLoadingGenre(true);

            const genre = await getGenreById(
                game.genero_id
            );

            setSelectedGenre(genre);

        } catch (error) {

            console.error(
                "Erro ao buscar gênero:",
                error
            );

        } finally {

            setLoadingGenre(false);

        }
    }

    function handleRatingChange(value: string) {
        const regex = /^(?:[0-9](?:[.,][0-9]?)?|10)?$/;

        if (regex.test(value)) {
            setRating(value);
        }
    }

    async function publishReview() {

        console.log("userId:", user);
        console.log("selectedGame:", selectedGame);
        console.log("rating:", rating);
        console.log("comment:", comment);

        if (!user) {
            console.log("Bloqueou: sem userId");
            return;
        }

        if (!selectedGame) {
            console.log("Bloqueou: sem selectedGame");
            return;
        }

        const trimmedRating = rating.trim();
        const isCompleteRating = /^(?:[0-9](?:[.,][0-9])?|10)$/.test(trimmedRating);

        if (!trimmedRating || !isCompleteRating) {
            console.log("Bloqueou: rating inválido ou incompleto", trimmedRating);
            return;
        }

        const normalizedRating = Number(trimmedRating.replace(",", "."));

        if (!comment.trim()) {
            console.log("Bloqueou: sem comment");
            return;
        }

        try {

            setPublishing(true);

            await createReview({
                usuario_id: user.id,
                jogo_id: selectedGame.id,
                nota: normalizedRating,
                comentario: comment.trim(),
            });

            await reloadReviews();

            setRating("");
            setComment("");
            setSelectedGame(null);
            setSelectedGenre(null);

        } catch (error) {

            console.error(
                "Erro ao criar review:",
                error
            );

        } finally {

            setPublishing(false);

        }
    }

    return {
        games,
        selectedGame,
        setSelectedGame,
        selectedGenre,
        handleSelectGame,
        rating,
        setRating,
        handleRatingChange,
        comment,
        setComment,
        loadingGenre,
        publishing,
        publishReview,
    };
}