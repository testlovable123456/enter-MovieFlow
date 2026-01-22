import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Movie, tmdbApi } from '@/lib/tmdb';
import { MovieCard } from '@/components/MovieCard';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [trendingData, popularData, topRatedData] = await Promise.all([
          tmdbApi.getTrending(),
          tmdbApi.getPopular(),
          tmdbApi.getTopRated(),
        ]);
        setTrending(trendingData.slice(0, 10));
        setPopular(popularData.slice(0, 10));
        setTopRated(topRatedData.slice(0, 10));
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-[60vh]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Loading movies...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[400px] rounded-2xl overflow-hidden"
        >
          {trending[0] && (
            <>
              <img
                src={tmdbApi.getImageUrl(trending[0].backdrop_path, 'original')}
                alt={trending[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-2xl"
                  >
                    <h1 className="text-5xl font-bold text-foreground mb-4">
                      {trending[0].title}
                    </h1>
                    <p className="text-lg text-muted-foreground line-clamp-3 mb-6">
                      {trending[0].overview}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.href = `/movie/${trending[0].id}`}
                      className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </>
          )}
        </motion.div>

        {/* Trending Movies */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Trending This Week</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {trending.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        {/* Popular Movies */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Popular Movies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {popular.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        {/* Top Rated */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Top Rated</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {topRated.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
