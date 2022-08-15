import axios from "axios";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

let n = 0;
export const fetchMovies = async (movieName) =>
  axios.get(`${API_ENDPOINT}&s=${movieName}`).then((res) => {
    const response = res.data.Search.splice(n, 3);
    n++;
    n++;
    return response;
  });

export const fetchMovie = async (movieId) =>
  axios.get(`${API_ENDPOINT}&i=${movieId}`);
