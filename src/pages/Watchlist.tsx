import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Movie } from '@/lib/tmdb';
import { watchlistService } from '@/lib/watchlist';
import { MovieCard } from '@/components/MovieCard';
import { Navbar } from '@/components/Navbar';

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  const loadWatchlist = () => {
    setWatchlist(watchlistService.getWatchlist());
  };

  useEffect(() => {
    loadWatchlist();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-2">
            My Watchlist
          </h1>
          <p className="text-muted-foreground">
            {watchlist.length} {watchlist.length === 1 ? 'movie' : 'movies'} saved
          </p>
        </motion.div>

        {watchlist.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Heart className="w-20 h-20 text-muted-foreground mx-auto mb-4" />
            <p className="text-2xl text-muted-foreground mb-2">
              Your watchlist is empty
            </p>
            <p className="text-muted-foreground">
              Start adding movies you want to watch later
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {watchlist.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onWatchlistChange={loadWatchlist}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
