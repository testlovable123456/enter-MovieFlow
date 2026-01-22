import { Movie } from './tmdb';

const WATCHLIST_KEY = 'movie_watchlist';

export const watchlistService = {
  getWatchlist: (): Movie[] => {
    const stored = localStorage.getItem(WATCHLIST_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  addToWatchlist: (movie: Movie): void => {
    const watchlist = watchlistService.getWatchlist();
    if (!watchlist.find(m => m.id === movie.id)) {
      watchlist.push(movie);
      localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
    }
  },

  removeFromWatchlist: (movieId: number): void => {
    const watchlist = watchlistService.getWatchlist();
    const filtered = watchlist.filter(m => m.id !== movieId);
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(filtered));
  },

  isInWatchlist: (movieId: number): boolean => {
    const watchlist = watchlistService.getWatchlist();
    return watchlist.some(m => m.id === movieId);
  },
};
