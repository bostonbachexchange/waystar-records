// Events.js
import React from 'react';
import './Events.css'; // Import the Events page styles

const Events = () => {
  return (
    <div className="events-container">
      <h2 className="page-title">Upcoming Events</h2>

        <div className="event">
        <div className="event-details">
          <h3 className="event-title">Live Concert: Urban Vibes Unleashed</h3>
          <p className="event-date">Date: March 10, 2024</p>
          <p className="event-location">Location: Waystar Arena, New York City</p>
          <p className="event-description">Join us for an electrifying night of music featuring top artists from Waystar Records. Get ready to groove to the urban beats and experience the essence of the city's vibrant music scene.</p>
        </div>
      </div>

      <div className="event">
        <div className="event-details">
          <h3 className="event-title">Music Industry Summit</h3>
          <p className="event-date">Date: April 5-7, 2024</p>
          <p className="event-location">Location: Waystar Tower, New York City</p>
          <p className="event-description">An exclusive event bringing together industry professionals, artists, and innovators to discuss the latest trends, opportunities, and challenges in the music industry. Don't miss this chance to network and gain insights from the experts.</p>
        </div>
      </div>

      {/* Add more events here */}
      
      {/* Additional events */}
      
      <div className="event">
        <div className="event-details">
          <h3 className="event-title">Summer Music Festival</h3>
          <p className="event-date">Date: June 20-22, 2024</p>
          <p className="event-location">Location: Central Park, New York City</p>
          <p className="event-description">Join us for three days of music, food, and fun at the Summer Music Festival. Featuring performances by top artists and emerging talents, this event promises to be a highlight of the summer season.</p>
        </div>
      </div>

      <div className="event">
        <div className="event-details">
          <h3 className="event-title">Waystar Records Showcase</h3>
          <p className="event-date">Date: July 15, 2024</p>
          <p className="event-location">Location: Waystar Hall, New York City</p>
          <p className="event-description">Experience the best of Waystar Records as we showcase our talented artists in an unforgettable evening of music and entertainment. Don't miss this opportunity to discover the next big stars in the industry.</p>
        </div>
      </div>

      {/* Add more events here */}
      
    </div>
  );
}

export default Events;
