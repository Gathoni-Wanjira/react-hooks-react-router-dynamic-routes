import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";
import MovieNotFound from "./MovieNotFound";

function MoviesPage({ movies }) {
  // console.log(movies);
  const match = useRouteMatch();
  console.log(match.url);
  
  return (
    <div>
      <MoviesList movies={movies} />

      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>

      <Route exact path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;