const TMDB_API_KEY = '8d8e1c1f0d5e3f6a2c4b5d6e7f8a9b0c';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
}

export interface MovieDetails extends Movie {
  genres: { id: number; name: string }[];
  runtime: number;
  tagline: string;
  budget: number;
  revenue: number;
  status: string;
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
}

export const tmdbApi = {
  getTrending: async (): Promise<Movie[]> => {
    const response = await fetch(
      `${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`
    );
    const data = await response.json();
    return data.results;
  },

  getPopular: async (): Promise<Movie[]> => {
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`
    );
    const data = await response.json();
    return data.results;
  },

  getTopRated: async (): Promise<Movie[]> => {
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`
    );
    const data = await response.json();
    return data.results;
  },

  getMovieDetails: async (movieId: number): Promise<MovieDetails> => {
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}`
    );
    return response.json();
  },

  getMovieVideos: async (movieId: number): Promise<Video[]> => {
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${movieId}/videos?api_key=${TMDB_API_KEY}`
    );
    const data = await response.json();
    return data.results;
  },

  searchMovies: async (query: string): Promise<Movie[]> => {
    const response = await fetch(
      `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data.results;
  },

  getImageUrl: (path: string | null, size: 'w500' | 'original' = 'w500'): string => {
    if (!path) return '/placeholder.svg';
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
  },
};
