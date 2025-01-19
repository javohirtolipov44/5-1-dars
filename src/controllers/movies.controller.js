import moviesService from "../services/movies.service.js";

class moviesController {
  constructor() {
    this.moviesService = new moviesService();
  }
  async addMoviesController(req, res) {
    try {
      const body = req.body;
      const movies = await this.moviesService.addmovie(body);
      console.log("salllom");
      if (movies) {
        res.status(201).json({
          message: "success",
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async getTopMoviesController(req, res) {
    try {
      const query = req.query;
      const movies = await this.moviesService.getTopMovies(query);
      res.json(movies);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getMoviesByGenreController(req, res) {
    try {
      const params = req.params;
      const movies = await this.moviesService.getMoviesByGenre(params);
      res.json(movies);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getMoviesByYearController(req, res) {
    try {
      const query = req.query;
      const movies = await this.moviesService.getMoviesByYear(query);
      res.json(movies);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getMoviesByCountryController(req, res) {
    try {
      const params = req.params;
      const movies = await this.moviesService.getMoviesByCountry(params);
      res.json(movies);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getMoviesByDurationController(req, res) {
    try {
      const query = req.query;
      const movies = await this.moviesService.getMoviesByDuration(query);
      res.json(movies);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getsearchMoviesController(req, res) {
    try {
      const query = req.query;
      const movies = await this.moviesService.getsearchMovies(query);
      res.json(movies);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default moviesController;
