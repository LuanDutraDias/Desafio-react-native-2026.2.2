// contexts/AppDataContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";

import { Game } from "@/types/game";
import { Genre } from "@/types/genre";
import { Platform } from "@/types/platform";
import { Review } from "@/types/review";

import { getGames } from "@/services/games";
import { getGenres } from "@/services/genres";
import { getPlatforms } from "@/services/platforms";
import { getReview } from "@/services/reviews";

type AppDataContextType = {
    games: Game[];
    genres: Genre[];
    platforms: Platform[];
    reviews: Review[];
    loading: boolean;
    reloadReviews: () => Promise<void>;
};

const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

export function AppDataProvider({ children }: { children: ReactNode }) {

    const [games, setGames] = useState<Game[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [platforms, setPlatforms] = useState<Platform[]>([]);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    const reloadReviews = useCallback(async () => {
        try {
            const reviewsResponse = await getReview();
            setReviews(reviewsResponse);
        } catch (error) {
            console.error("Erro ao recarregar reviews:", error);
        }
    }, []);

    useEffect(() => {
        loadAppData();
    }, []);

    async function loadAppData() {
        try {
            setLoading(true);

            const [gamesResponse, genresResponse, platformsResponse, reviewsResponse] =
                await Promise.all([
                    getGames(),
                    getGenres(),
                    getPlatforms(),
                    getReview(),
                ]);

            setGames(gamesResponse);
            setGenres(genresResponse);
            setPlatforms(platformsResponse);
            setReviews(reviewsResponse);

        } catch (error) {
            console.error("Erro ao carregar dados globais:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <AppDataContext.Provider value={{ games, genres, platforms, reviews, loading, reloadReviews }}>
            {children}
        </AppDataContext.Provider>
    );
}

export function useAppData() {
    const context = useContext(AppDataContext);

    if (!context) {
        throw new Error("useAppData deve ser usado dentro de um AppDataProvider");
    }

    return context;
}