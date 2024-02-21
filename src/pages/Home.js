// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import "./Home.css";

const Home = () => {

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      loop: 1, // Optional: Loop the video
      playlist: '77PsqaWzwG0', // YouTube video ID
    },
  };

  return (
    <div className="section">
      <div className="home-banner home-title">
        <h1>Welcome to Waystar Records</h1>
        <p>Your destination for premium music experiences</p>
      </div>
      <YouTube videoId="77PsqaWzwG0" opts={opts} />
      <div className="section-content home-subtitle">
        <h2>About Us</h2>
        <p>Waystar Records is a leading music label dedicated to delivering high-quality music experiences to our audience. With a roster of talented artists and a commitment to innovation, we strive to push the boundaries of the music industry.</p>
        <Link to="/waystar-records/about" className="button home-button">Learn More</Link>
      </div>
      <div className="section-content  home-title">
        <h2>Featured Artists</h2>
        <p>Meet some of our talented artists who are taking the music industry by storm.</p>
        {/* Add images and brief descriptions of featured artists */}
      </div>
      <div className="section-content home-subtitle">
        <h2>Latest Releases</h2>
        <p>Discover our latest music releases, from chart-topping singles to groundbreaking albums.</p>
        {/* Add links or previews of the latest music releases */}
      </div>
      <div className="section-content">
        <h2>Upcoming Events</h2>
        <p>Stay tuned for exciting music events and concerts happening near you.</p>
        {/* Add details of upcoming music events */}
      </div>
      <div className="section-content">
        <h2>Testimonials</h2>
        <p>See what our fans and collaborators have to say about their experience with Waystar Records.</p>
        {/* Add testimonials from satisfied customers or industry professionals */}
      </div>
      <div className="section-content">
        <h2>Newsletter Signup</h2>
        <p>Subscribe to our newsletter to receive exclusive updates, discounts, and behind-the-scenes content.</p>
        {/* Add a newsletter signup form */}
      </div>
    </div>
  );
}

export default Home;
