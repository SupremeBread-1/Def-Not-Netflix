require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;

const discover_link = `/discover/movie?api_key=${API_KEY}&with_genres=`;

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${discover_link}28`,
  fetchComedyMovies: `${discover_link}35`,
  fetchHorrorMovies: `${discover_link}27`,
  fetchRomanceMovies: `${discover_link}10749`,
  fetchDocumentaries: `${discover_link}99`,
};

export function searchparams(query) {
  return `/search/multi?api_key=${API_KEY}&query=${query}&page=1`;
}

export function red(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  ).then((res) => res.json());
}

export function blue(query) {
  return fetch(
    `https://api.themoviedb.org/3/genre/${query}/list?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());
}
