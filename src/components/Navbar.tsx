import { Film, Heart, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Film className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">MovieDB</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="relative flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Film className="w-5 h-5" />
            <span className="font-medium">Discover</span>
            {isActive('/') && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </Link>

          <Link
            to="/search"
            className="relative flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Search className="w-5 h-5" />
            <span className="font-medium">Search</span>
            {isActive('/search') && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </Link>

          <Link
            to="/watchlist"
            className="relative flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Heart className="w-5 h-5" />
            <span className="font-medium">Watchlist</span>
            {isActive('/watchlist') && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};
