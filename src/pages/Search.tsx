import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon } from 'lucide-react';
import { Movie, tmdbApi } from '@/lib/tmdb';
import { MovieCard } from '@/components/MovieCard';
import { Navbar } from '@/components/Navbar';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setSearched(true);
    try {
      const movies = await tmdbApi.searchMovies(query);
      setResults(movies);
    } catch (error) {
      console.error('Error searching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-6 text-center">
            Search Movies
          </h1>
          
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for movies..."
              className="w-full px-6 py-4 pr-14 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
          </form>
        </motion.div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Searching movies...</p>
            </div>
          </div>
        )}

        {!loading && searched && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-muted-foreground">
              No movies found for "{query}"
            </p>
          </motion.div>
        )}

        {!loading && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground mb-6">
              Found {results.length} results for "{query}"
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </motion.div>
        )}

        {!searched && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <SearchIcon className="w-20 h-20 text-muted-foreground mx-auto mb-4" />
            <p className="text-2xl text-muted-foreground">
              Start searching for your favorite movies
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
