import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Clock, Calendar, Heart, Play } from 'lucide-react';
import { MovieDetails, Video, tmdbApi } from '@/lib/tmdb';
import { watchlistService } from '@/lib/watchlist';
import { Navbar } from '@/components/Navbar';

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      if (!id) return;
      
      try {
        const [movieData, videosData] = await Promise.all([
          tmdbApi.getMovieDetails(parseInt(id)),
          tmdbApi.getMovieVideos(parseInt(id)),
        ]);
        setMovie(movieData);
        setVideos(videosData.filter(v => v.site === 'YouTube' && v.type === 'Trailer'));
        setIsInWatchlist(watchlistService.isInWatchlist(parseInt(id)));
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  const toggleWatchlist = () => {
    if (!movie) return;
    
    if (isInWatchlist) {
      watchlistService.removeFromWatchlist(movie.id);
    } else {
      watchlistService.addToWatchlist(movie);
    }
    setIsInWatchlist(!isInWatchlist);
  };

  if (loading || !movie) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-[80vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading movie details...</p>
          </div>
        </div>
      </div>
    );
  }

  const trailer = videos[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Hero Section */}
        <div className="relative h-[500px]">
          <img
            src={tmdbApi.getImageUrl(movie.backdrop_path, 'original')}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
          
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:bg-background transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-foreground" />
          </button>
        </div>

        <div className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Poster */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-shrink-0"
            >
              <img
                src={tmdbApi.getImageUrl(movie.poster_path)}
                alt={movie.title}
                className="w-64 rounded-xl shadow-2xl border border-border"
              />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1"
            >
              <h1 className="text-5xl font-bold text-foreground mb-2">
                {movie.title}
              </h1>
              
              {movie.tagline && (
                <p className="text-xl text-muted-foreground italic mb-4">
                  "{movie.tagline}"
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-1 px-3 py-1 bg-primary/20 border border-primary rounded-lg">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-bold text-foreground">
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    ({movie.vote_count} votes)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-5 h-5" />
                  <span>{movie.release_date}</span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span>{movie.runtime} min</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mb-8">
                {trailer && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowTrailer(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Play className="w-5 h-5" />
                    Watch Trailer
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleWatchlist}
                  className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isInWatchlist ? 'fill-primary text-primary' : ''
                    }`}
                  />
                  {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
                </motion.button>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-3">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {movie.overview}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Status
                  </h3>
                  <p className="text-foreground font-semibold">{movie.status}</p>
                </div>
                {movie.budget > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Budget
                    </h3>
                    <p className="text-foreground font-semibold">
                      ${movie.budget.toLocaleString()}
                    </p>
                  </div>
                )}
                {movie.revenue > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Revenue
                    </h3>
                    <p className="text-foreground font-semibold">
                      ${movie.revenue.toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Trailer Modal */}
      {showTrailer && trailer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowTrailer(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
              title={trailer.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
