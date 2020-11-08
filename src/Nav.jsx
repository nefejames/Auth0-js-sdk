import React from 'react';
import { Link } from 'react-router-dom' 


const Nav = ({auth}) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li>
          <button onClick={auth.isAuthenticated() ? auth.logout : auth.login}> 
            {auth.isAuthenticated() ? "log out" : "log in"}
           </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
