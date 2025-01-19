import { Router } from "express";
import moviesController from "../controllers/movies.controller.js";

const moviesRouter = Router();
const controller = new moviesController();

moviesRouter.post("/movie", (req, res) => {
  return controller.addMoviesController(req, res);
});

moviesRouter.get("/movies/top", (req, res) => {
  return controller.getTopMoviesController(req, res);
});

moviesRouter.get("/movies/genre/:genre", (req, res) => {
  return controller.getMoviesByGenreController(req, res);
});

moviesRouter.get("/movies/year", (req, res) => {
  return controller.getMoviesByYearController(req, res);
});

moviesRouter.get("/movies/country/:country", (req, res) => {
  return controller.getMoviesByCountryController(req, res);
});

moviesRouter.get("/movies/duration", (req, res) => {
  return controller.getMoviesByDurationController(req, res);
});

moviesRouter.get("/movies/search", (req, res) => {
  return controller.getsearchMoviesController(req, res);
});

export default moviesRouter;
