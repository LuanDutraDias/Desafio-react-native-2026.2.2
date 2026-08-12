import { useEffect, useState } from "react";

import { Review } from "@/types/review";
import { getReview } from "@/services/reviews";
import { getGames } from "@/services/games";
import { getGenres } from "@/services/genres";
import { getPlatforms } from "@/services/platforms";
import { Game } from "@/types/game";
import { Genre } from "@/types/genre";
import { Platform } from "@/types/platform";

export function useGetReview() {

    const [reviews, setReviews] = useState<Review[]>([]);
    const [games, setGames] = useState<Game[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [platforms, setPlatforms] = useState<Platform[]>([]);
    const [loading, setLoading] = useState(true);
    
    async function loadReviews() {
        
        try {
            
            setLoading(true);
            const [reviewsResponse, gamesResponse, genresResponse, platformsResponse] =
            await Promise.all([
                getReview(),
                getGames(),
                getGenres(),
                getPlatforms(),
                //getUsers();
            ]);
            setReviews(reviewsResponse);
            setGames(gamesResponse);
            setGenres(genresResponse);
            setPlatforms(platformsResponse);
            //setUsers(usersResponse)
            
        } catch (error) {
            
            console.error(
                "Erro ao carregar reviews:",
                error
            );
            
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        loadReviews();
    }, []);
    
    return {
        reviews,
        games,
        genres,
        platforms,
        loading,
    };
}