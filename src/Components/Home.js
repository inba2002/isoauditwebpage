import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/swot">SWOT ANALYSIS</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/parties">PARTIES AND EXPECTATIONS</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
