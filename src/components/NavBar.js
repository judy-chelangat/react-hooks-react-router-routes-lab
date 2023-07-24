import React from "react";
import { NavLink ,  Link} from "react-router-dom";

  function NavBar() {
    return (
      <div>
       <Link to="/">Home</Link>
       <Link to="/directors">Directors</Link>
     <Link to="/actors">Actors</Link>
     <Link to="/movies">Movies</Link>
    
       </div>
        )
  }

export default NavBar;
