import Index from "./pages/Index";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import Watchlist from "./pages/Watchlist";
import NotFound from "./pages/NotFound";

export const routers = [
    {
      path: "/",
      name: 'home',
      element: <Index />,
    },
    {
      path: "/movie/:id",
      name: 'movie-detail',
      element: <MovieDetail />,
    },
    {
      path: "/search",
      name: 'search',
      element: <Search />,
    },
    {
      path: "/watchlist",
      name: 'watchlist',
      element: <Watchlist />,
    },
    /* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */
    {
      path: "*",
      name: '404',
      element: <NotFound />,
    },
];

declare global {
  interface Window {
    __routers__: typeof routers;
  }
}

window.__routers__ = routers;