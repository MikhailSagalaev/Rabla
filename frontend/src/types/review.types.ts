export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  advantages?: string;
  disadvantages?: string;
  images?: string[];
  likes: number;
  dislikes: number;
  useTime: string;
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    [key: number]: number; // key: rating (1-5), value: count
  };
} 