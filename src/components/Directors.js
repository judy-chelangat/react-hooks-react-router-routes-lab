import React from "react";
import { directors } from "../data";


const directorsDetails=directors.map((director)=>{
  return (
    <div>
      <p>{director.name}</p>
      <ul>
        <li>{director.movies}</li>
      </ul>
    </div>
  )

})
    function Directors() {
      return(
          <>
            <h1>Directors Page</h1>
            {directorsDetails}
            </>
        )
    }

export default Directors;
