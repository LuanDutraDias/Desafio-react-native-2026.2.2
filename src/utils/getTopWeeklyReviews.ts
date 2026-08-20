import { Review } from "@/types/review";

export function getTopWeeklyReviews(reviews: Review[], count: number){
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const reviewsDaSemana = reviews.filter((review) => {
        const dataReview = new Date(review.created_at);
        return dataReview >= oneWeekAgo;
    });

    return [...reviewsDaSemana]
        .sort((a, b) => b.nota - a.nota)
        .slice(0, count);
}