import React from "react";
import { movies } from "../data";



const MovieDetails=movies.map((movie,index)=>{
  return(
    <div key={index}>
      <h2>{movie.title}</h2>
      <p>{movie.time}</p>
      <ul>
        <li>{movie.genres}</li>
      </ul>
    </div>
  )
    })
    function Movies() {
      return (
        <div>
          <h1>Movies Page</h1>
          {MovieDetails}
        </div>
      );
    }

export default Movies;
