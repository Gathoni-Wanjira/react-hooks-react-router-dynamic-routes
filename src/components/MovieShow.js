import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const { movieId } = useParams();
  console.log(movieId);
  const movie = movies.find((thisMovie) => thisMovie.id === parseInt(movieId));
  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
}

export default MovieShow;
