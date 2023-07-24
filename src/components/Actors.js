import React from "react";
import { actors } from "../data";



const actorsDetails=actors.map((actor,index)=>{
  return (
    <div key={index}>
      <p>{actor.name}</p>
      <ul>
        <li>{actor.movies}</li>
      </ul>
    </div>
  )

})
function Actors() {
  return <>
    <h1>Actors Page</h1>
    {actorsDetails}
  </>;
}

export default Actors;
