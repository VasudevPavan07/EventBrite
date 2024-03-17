import React from 'react';
import { Link } from 'react-router-dom';

const EventInfoPage = () => {
  return (
    <div>
      <h1>Event Information Page</h1>
      <p>Information about events goes here.</p>
      <Link to="/create-event">
        <button>Create an Event</button>
      </Link>
    </div>
  );
};

export default EventInfoPage;
