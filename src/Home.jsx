import React from 'react';
import {Link} from 'react-router-dom'

const Home = ({auth}) => {
  return (
    <div>
      <h1>home</h1>
      {
        auth.isAuthenticated() && (
          <h4>
            You are logged in! You can now view your{' '}
            <Link to="profile">profile</Link>
          </h4>
        )
        }
    </div>
  )
}

export default Home
