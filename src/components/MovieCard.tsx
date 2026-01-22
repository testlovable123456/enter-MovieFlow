import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';
import { Movie, tmdbApi } from '@/lib/tmdb';
import { watchlistService } from '@/lib/watchlist';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
  onWatchlistChange?: () => void;
}

export const MovieCard = ({ movie, onWatchlistChange }: MovieCardProps) => {
  const navigate = useNavigate();
  const [isInWatchlist, setIsInWatchlist] = useState(
    watchlistService.isInWatchlist(movie.id)
  );
  const [imageError, setImageError] = useState(false);

  const toggleWatchlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInWatchlist) {
      watchlistService.removeFromWatchlist(movie.id);
    } else {
      watchlistService.addToWatchlist(movie);
    }
    setIsInWatchlist(!isInWatchlist);
    onWatchlistChange?.();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="relative group cursor-pointer"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <div className="relative overflow-hidden rounded-lg bg-card border border-border">
        <div className="aspect-[2/3] relative bg-muted">
          {!imageError ? (
            <img
              src={tmdbApi.getImageUrl(movie.poster_path)}
              alt={movie.title}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <span className="text-muted-foreground text-center px-4">{movie.title}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleWatchlist}
          className="absolute top-2 right-2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        >
          <Heart
            className={`w-5 h-5 ${
              isInWatchlist ? 'fill-primary text-primary' : 'text-foreground'
            }`}
          />
        </motion.button>

        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium text-foreground">
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
          <h3 className="text-foreground font-semibold line-clamp-2 mb-1">
            {movie.title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {movie.release_date?.split('-')[0] || 'N/A'}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
