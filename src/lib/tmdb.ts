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

// Sample movie data with real movie information
const sampleMovies: Movie[] = [
  {
    id: 1,
    title: "Oppenheimer",
    overview: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    poster_path: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    release_date: "2023-07-19",
    vote_average: 8.1,
    vote_count: 8234,
    genre_ids: [18, 36, 53],
  },
  {
    id: 2,
    title: "Dune: Part Two",
    overview: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    poster_path: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    release_date: "2024-02-27",
    vote_average: 8.3,
    vote_count: 5421,
    genre_ids: [878, 12],
  },
  {
    id: 3,
    title: "The Batman",
    overview: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
    poster_path: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fber0cbW42cuhm4Z.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    release_date: "2022-03-01",
    vote_average: 7.7,
    vote_count: 9876,
    genre_ids: [80, 9648, 53],
  },
  {
    id: 4,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster_path: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    release_date: "2014-11-05",
    vote_average: 8.4,
    vote_count: 34521,
    genre_ids: [12, 18, 878],
  },
  {
    id: 5,
    title: "Spider-Man: Across the Spider-Verse",
    overview: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    poster_path: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    release_date: "2023-05-31",
    vote_average: 8.4,
    vote_count: 6532,
    genre_ids: [16, 28, 12],
  },
  {
    id: 6,
    title: "Barbie",
    overview: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land.",
    poster_path: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
    release_date: "2023-07-19",
    vote_average: 7.0,
    vote_count: 7854,
    genre_ids: [35, 12],
  },
  {
    id: 7,
    title: "Avatar: The Way of Water",
    overview: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started.",
    poster_path: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/5ScPNT6fHtfYJeWBajZciPV3hEL.jpg",
    release_date: "2022-12-14",
    vote_average: 7.6,
    vote_count: 11234,
    genre_ids: [878, 12, 28],
  },
  {
    id: 8,
    title: "Top Gun: Maverick",
    overview: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past.",
    poster_path: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
    release_date: "2022-05-24",
    vote_average: 8.2,
    vote_count: 8765,
    genre_ids: [28, 18],
  },
  {
    id: 9,
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    release_date: "1994-09-23",
    vote_average: 8.7,
    vote_count: 25432,
    genre_ids: [18, 80],
  },
  {
    id: 10,
    title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster_path: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    release_date: "2010-07-15",
    vote_average: 8.4,
    vote_count: 35678,
    genre_ids: [28, 878, 12],
  },
  {
    id: 11,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
    release_date: "2008-07-16",
    vote_average: 8.5,
    vote_count: 31234,
    genre_ids: [18, 28, 80],
  },
  {
    id: 12,
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster_path: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    release_date: "1994-09-10",
    vote_average: 8.5,
    vote_count: 26789,
    genre_ids: [53, 80],
  },
  {
    id: 13,
    title: "Parasite",
    overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    poster_path: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    release_date: "2019-05-30",
    vote_average: 8.5,
    vote_count: 17654,
    genre_ids: [35, 53, 18],
  },
  {
    id: 14,
    title: "The Godfather",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    poster_path: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    release_date: "1972-03-14",
    vote_average: 8.7,
    vote_count: 19876,
    genre_ids: [18, 80],
  },
  {
    id: 15,
    title: "Fight Club",
    overview: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    poster_path: "https://image.tmdb.org/t/p/w500/pV2ZhKbs7lHsXJ7RGCKzs7NbjhW.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    release_date: "1999-10-15",
    vote_average: 8.4,
    vote_count: 28765,
    genre_ids: [18, 53, 35],
  },
];

const movieDetailsMap: Record<number, MovieDetails> = {
  1: {
    ...sampleMovies[0],
    genres: [{ id: 18, name: "Drama" }, { id: 36, name: "History" }, { id: 53, name: "Thriller" }],
    runtime: 181,
    tagline: "The world forever changes.",
    budget: 100000000,
    revenue: 952000000,
    status: "Released",
  },
  2: {
    ...sampleMovies[1],
    genres: [{ id: 878, name: "Science Fiction" }, { id: 12, name: "Adventure" }],
    runtime: 166,
    tagline: "Long live the fighters.",
    budget: 190000000,
    revenue: 711800000,
    status: "Released",
  },
  3: {
    ...sampleMovies[2],
    genres: [{ id: 80, name: "Crime" }, { id: 9648, name: "Mystery" }, { id: 53, name: "Thriller" }],
    runtime: 176,
    tagline: "Unmask the truth.",
    budget: 185000000,
    revenue: 772000000,
    status: "Released",
  },
  4: {
    ...sampleMovies[3],
    genres: [{ id: 12, name: "Adventure" }, { id: 18, name: "Drama" }, { id: 878, name: "Science Fiction" }],
    runtime: 169,
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    budget: 165000000,
    revenue: 701729206,
    status: "Released",
  },
  5: {
    ...sampleMovies[4],
    genres: [{ id: 16, name: "Animation" }, { id: 28, name: "Action" }, { id: 12, name: "Adventure" }],
    runtime: 140,
    tagline: "It's how you wear the mask that matters.",
    budget: 100000000,
    revenue: 690500000,
    status: "Released",
  },
  6: {
    ...sampleMovies[5],
    genres: [{ id: 35, name: "Comedy" }, { id: 12, name: "Adventure" }],
    runtime: 114,
    tagline: "She's everything. He's just Ken.",
    budget: 145000000,
    revenue: 1441800000,
    status: "Released",
  },
  7: {
    ...sampleMovies[6],
    genres: [{ id: 878, name: "Science Fiction" }, { id: 12, name: "Adventure" }, { id: 28, name: "Action" }],
    runtime: 192,
    tagline: "Return to Pandora.",
    budget: 350000000,
    revenue: 2320000000,
    status: "Released",
  },
  8: {
    ...sampleMovies[7],
    genres: [{ id: 28, name: "Action" }, { id: 18, name: "Drama" }],
    runtime: 130,
    tagline: "Feel the need... The need for speed.",
    budget: 170000000,
    revenue: 1493200000,
    status: "Released",
  },
  9: {
    ...sampleMovies[8],
    genres: [{ id: 18, name: "Drama" }, { id: 80, name: "Crime" }],
    runtime: 142,
    tagline: "Fear can hold you prisoner. Hope can set you free.",
    budget: 25000000,
    revenue: 58300000,
    status: "Released",
  },
  10: {
    ...sampleMovies[9],
    genres: [{ id: 28, name: "Action" }, { id: 878, name: "Science Fiction" }, { id: 12, name: "Adventure" }],
    runtime: 148,
    tagline: "Your mind is the scene of the crime.",
    budget: 160000000,
    revenue: 829895144,
    status: "Released",
  },
  11: {
    ...sampleMovies[10],
    genres: [{ id: 18, name: "Drama" }, { id: 28, name: "Action" }, { id: 80, name: "Crime" }],
    runtime: 152,
    tagline: "Why so serious?",
    budget: 185000000,
    revenue: 1004558444,
    status: "Released",
  },
  12: {
    ...sampleMovies[11],
    genres: [{ id: 53, name: "Thriller" }, { id: 80, name: "Crime" }],
    runtime: 154,
    tagline: "You won't know the facts until you've seen the fiction.",
    budget: 8000000,
    revenue: 213928762,
    status: "Released",
  },
  13: {
    ...sampleMovies[12],
    genres: [{ id: 35, name: "Comedy" }, { id: 53, name: "Thriller" }, { id: 18, name: "Drama" }],
    runtime: 133,
    tagline: "Act like you own the place.",
    budget: 15500000,
    revenue: 263100000,
    status: "Released",
  },
  14: {
    ...sampleMovies[13],
    genres: [{ id: 18, name: "Drama" }, { id: 80, name: "Crime" }],
    runtime: 175,
    tagline: "An offer you can't refuse.",
    budget: 6000000,
    revenue: 286000000,
    status: "Released",
  },
  15: {
    ...sampleMovies[14],
    genres: [{ id: 18, name: "Drama" }, { id: 53, name: "Thriller" }, { id: 35, name: "Comedy" }],
    runtime: 139,
    tagline: "Mischief. Mayhem. Soap.",
    budget: 63000000,
    revenue: 101200000,
    status: "Released",
  },
};

const movieVideosMap: Record<number, Video[]> = {
  1: [{ id: "1", key: "uYPbbksJxIg", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
  2: [{ id: "2", key: "Way9Dexny3w", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
  3: [{ id: "3", key: "mqqft2x_Aa4", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
  4: [{ id: "4", key: "zSWdZVtXT7E", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
  5: [{ id: "5", key: "cqGjhVJWtEg", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
  6: [{ id: "6", key: "pBk4NYhWNMM", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
  7: [{ id: "7", key: "d9MyW72ELq0", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
  8: [{ id: "8", key: "giXco2jaZ_4", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
  9: [{ id: "9", key: "PLl99DlL6b4", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
  10: [{ id: "10", key: "YoHD9XEInc0", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
  11: [{ id: "11", key: "EXeTwQWrcwY", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
  12: [{ id: "12", key: "s7EdQ4FqbhY", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
  13: [{ id: "13", key: "5xH0HfJHsaY", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
  14: [{ id: "14", key: "UaVTIH8mujA", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
  15: [{ id: "15", key: "BdJKm16Co6M", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true }],
};

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const tmdbApi = {
  getTrending: async (): Promise<Movie[]> => {
    await delay(300);
    return [...sampleMovies].sort(() => Math.random() - 0.5).slice(0, 10);
  },

  getPopular: async (): Promise<Movie[]> => {
    await delay(300);
    return [...sampleMovies].sort((a, b) => b.vote_count - a.vote_count).slice(0, 10);
  },

  getTopRated: async (): Promise<Movie[]> => {
    await delay(300);
    return [...sampleMovies].sort((a, b) => b.vote_average - a.vote_average).slice(0, 10);
  },

  getMovieDetails: async (movieId: number): Promise<MovieDetails> => {
    await delay(200);
    return movieDetailsMap[movieId] || movieDetailsMap[1];
  },

  getMovieVideos: async (movieId: number): Promise<Video[]> => {
    await delay(100);
    return movieVideosMap[movieId] || [];
  },

  searchMovies: async (query: string): Promise<Movie[]> => {
    await delay(300);
    const lowerQuery = query.toLowerCase();
    return sampleMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(lowerQuery) ||
        movie.overview.toLowerCase().includes(lowerQuery)
    );
  },

  getImageUrl: (path: string | null, size: 'w500' | 'original' = 'w500'): string => {
    if (!path) return '/placeholder.svg';
    // If it's already a full URL, return as is
    if (path.startsWith('http')) return path;
    return path;
  },
};
