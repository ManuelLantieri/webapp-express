const express = require("express");
const app = express();
const port = 3000;

// Dati statici delle tabelle movies e reviews
const movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    release_year: 2010,
    abstract:
      "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    image: null,
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    genre: "Crime",
    release_year: 1972,
    abstract:
      "The story of a powerful Italian-American crime family and their struggles.",
    image: null,
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 3,
    title: "Titanic",
    director: "James Cameron",
    genre: "Romance",
    release_year: 1997,
    abstract:
      "A romantic story set against the tragic sinking of the RMS Titanic.",
    image: null,
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 4,
    title: "The Matrix",
    director: "The Wachowskis",
    genre: "Action",
    release_year: 1999,
    abstract:
      "A hacker discovers the truth about his reality and his role in the war against its controllers.",
    image: null,
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 5,
    title: "Interstellar",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    release_year: 2014,
    abstract:
      "A team of explorers travels through a wormhole in space to save humanity.",
    image: null,
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
];

const reviews = [
  {
    id: 1,
    movie_id: 1,
    name: "Alice",
    vote: 5,
    text: "A mind-bending masterpiece.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 2,
    movie_id: 1,
    name: "Bob",
    vote: 4,
    text: "Great visuals and a compelling story.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 3,
    movie_id: 1,
    name: "Charlie",
    vote: 3,
    text: "Confusing at times, but worth watching.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 4,
    movie_id: 2,
    name: "Diana",
    vote: 5,
    text: "The best crime movie ever made.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 5,
    movie_id: 2,
    name: "Eve",
    vote: 5,
    text: "A cinematic classic that never gets old.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 6,
    movie_id: 2,
    name: "Frank",
    vote: 4,
    text: "A bit slow-paced but very impactful.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 7,
    movie_id: 3,
    name: "Grace",
    vote: 5,
    text: "A heartbreaking love story.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 8,
    movie_id: 3,
    name: "Hank",
    vote: 4,
    text: "Beautiful visuals and a moving plot.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 9,
    movie_id: 3,
    name: "Ivy",
    vote: 3,
    text: "A bit too melodramatic for my taste.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 10,
    movie_id: 4,
    name: "Jack",
    vote: 5,
    text: "A revolutionary film in every sense.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 11,
    movie_id: 4,
    name: "Karen",
    vote: 4,
    text: "Great action and a thought-provoking plot.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 12,
    movie_id: 4,
    name: "Liam",
    vote: 4,
    text: "A unique take on reality and perception.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 13,
    movie_id: 5,
    name: "Mia",
    vote: 5,
    text: "Visually stunning and emotionally resonant.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 14,
    movie_id: 5,
    name: "Noah",
    vote: 3,
    text: "Interesting ideas but too long.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
  {
    id: 15,
    movie_id: 5,
    name: "Olivia",
    vote: 4,
    text: "A beautiful story about love and survival.",
    created_at: "2024-11-29 10:40:13",
    updated_at: "2024-11-29 10:40:13",
  },
];

app.use(express.json());

app.get("/movies", (req, res) => {
  res.json(results);
});

// Rotta per ottenere un film specifico per ID
app.get("/movies/:id", (req, res) => {
  const movieId = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === movieId);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send("Film non trovato");
  }
});

// Rotta per ottenere tutte le recensioni di un film specifico
app.get("/movies/:id/reviews", (req, res) => {
  const movieId = parseInt(req.params.id);
  const movieReviews = reviews.filter((r) => r.movie_id === movieId);
  res.json(movieReviews);
});

app.listen(port, () => {
  console.log(`Server avviato su porta ${port}`);
});
