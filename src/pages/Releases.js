// src/pages/Releases.js
import React from 'react';
import kendallImage from '../assets/kendall.jpg'
const Releases = () => {
  return (
    <div>
      <h2>Music Releases</h2>
      <div className="release">
        <img src={kendallImage} alt="Kendall Roy" />
        <h3>Kendall's Greatest Hits</h3>
        <p>Release Date: [Release Date]</p>
        <ul>
          <li>Track 1: Kendall's Anthem</li>
          <li>Track 2: Kendall's Ballad</li>
          {/* Include tracklist for albums */}
        </ul>
      </div>
      {/* Repeat the above for each music release */}
    </div>
  );
}

export default Releases;
