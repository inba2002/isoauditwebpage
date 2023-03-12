import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate= useNavigate();
  function handlesubmit(e){
    navigate("/");
  }
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

      <button onClick={handlesubmit}>Log Out</button>
      
    </div>
  )
}

export default Home
