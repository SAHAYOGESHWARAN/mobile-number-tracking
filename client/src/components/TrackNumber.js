import React, { useState } from 'react';
import axios from 'axios';

const TrackNumber = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleTrack = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/tracking/track', {
        mobileNumber,
        location,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Track Mobile Number</h2>
      <form onSubmit={handleTrack}>
        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Track</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TrackNumber;