import { useEffect, useState } from "react";

import { Game } from "@/types/game";
import { Genre } from "@/types/genre";

import { getGames } from "@/services/games";
import { getGenreById } from "@/services/genres";
import { getMe } from "@/services/auth";
import { createReview } from "@/services/reviews";

export function useCreateReview() {

    const [games, setGames] = useState<Game[]>([]);
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [userId, setUserId] = useState<number | null>(null);
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(true);
    const [loadingGenre, setLoadingGenre] = useState(false);
    const [publishing, setPublishing] = useState(false);

    useEffect(() => {
        loadInitialData();
    }, []);

    async function loadInitialData() {

        try {

            setLoading(true);

            const [gamesResponse, meResponse] =
                await Promise.all([
                    getGames(),
                    getMe(),
                ]);

            setGames(gamesResponse);

            setUserId(meResponse.user.id);

        } catch (error) {

            console.error(
                "Erro ao carregar dados da review:",
                error
            );

        } finally {

            setLoading(false);

        }
    }

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

    async function publishReview() {

    console.log("userId:", userId);
    console.log("selectedGame:", selectedGame);
    console.log("rating:", rating);
    console.log("comment:", comment);

    if (!userId) {
        console.log("Bloqueou: sem userId");
        return;
    }

    if (!selectedGame) {
        console.log("Bloqueou: sem selectedGame");
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

            setPublishing(true);

            await createReview({
                usuario_id: userId,
                jogo_id: selectedGame.id,
                nota: normalizedRating,
                comentario: comment.trim(),
            });

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
        selectedGenre,

        handleSelectGame,

        rating,
        setRating,

        comment,
        setComment,

        loading,
        loadingGenre,
        publishing,

        publishReview,
    };
}