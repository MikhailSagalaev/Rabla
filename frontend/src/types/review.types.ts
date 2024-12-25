export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  advantages?: string;
  disadvantages?: string;
  useTime?: string;
  likes?: number;
  dislikes?: number;
  images?: string[];
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    [key: number]: number;
  };
} 