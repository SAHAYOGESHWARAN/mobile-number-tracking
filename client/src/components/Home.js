import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Mobile Number Tracking</h1>
      <Link to="/track">
        <button>Track a Mobile Number</button>
      </Link>
    </div>
  );
};

export default Home;