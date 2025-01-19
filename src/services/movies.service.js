import Io from "../utils/io.js";

class moviesService {
  constructor() {
    this.io = new Io();
  }

  async addmovie(body) {
    const movies = await this.io.readFile("movies.json");
    movies.push({
      id: movies.length + 1,
      ...body,
    });
    await this.io.writeFile("movies.json", movies);
    return movies;
  }

  async getTopMovies(query) {
    const movies = await this.io.readFile("movies.json");
    const getmovies = movies.slice(0, query.limit);
    return getmovies;
  }

  async getMoviesByGenre(params) {
    const movies = await this.io.readFile("movies.json");
    const findMovie = movies.filter((movie) => movie.genre == params.genre);
    return findMovie;
  }

  async getMoviesByYear(query) {
    const movies = await this.io.readFile("movies.json");
    const findMovie = movies.filter(
      (movie) =>
        movie.year >= parseInt(query.from) && movie.year <= parseInt(query.to)
    );
    return findMovie;
  }

  async getMoviesByCountry(params) {
    const movies = await this.io.readFile("movies.json");
    const findMovie = movies.filter(
      (movie) => movie.country.toLowerCase() == params.country.toLowerCase()
    );
    return findMovie;
  }

  async getMoviesByDuration(query) {
    const movies = await this.io.readFile("movies.json");
    const findMovie = movies.filter(
      (movie) => movie.duration == parseInt(query.time)
    );
    return findMovie;
  }

  async getsearchMovies(query) {
    const movies = await this.io.readFile("movies.json");
    const findMovie = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.q.toLowerCase())
    );
    return findMovie;
  }
}

export default moviesService;
