// src/pages/Events.js
import React from 'react';

const Events = () => {
  return (
    <div>
      <h2>Upcoming Events</h2>
      <div className="event">
        <h3>Kendall Roy Live in Concert</h3>
        <p>Date: [Event Date]</p>
        <p>Location: [Event Location]</p>
        <button>Buy Tickets and Bask in Kendall's Glory</button>
      </div>
      {/* Repeat the above for each upcoming event */}
    </div>
  );
}

export default Events;
