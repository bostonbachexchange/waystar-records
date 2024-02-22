// Releases.js
import React from 'react';
import './Releases.css'; // Import the Releases page styles
import KendallBurger from '../assets/KendallBurger.webp';
import GregAlbum from '../assets/GregAlbum.jpeg';
import TomAlbum from '../assets/tomalbum.jpeg';
import RomanAlbum from '../assets/RomanDream.jpeg';
import GerriAlbum from '../assets/GerriArt.jpeg';
import ConnorAlbum from '../assets/Connor.webp';

const Releases = () => {
  return (
    <div className="releases-container">
      <h2 className="page-title">Latest Releases</h2>
      
      <div className="release">
        <img src={KendallBurger} alt="Album 1" className="album-cover" />
        <div className="release-details">
          <h3 className="album-title">Soulful Serenade</h3>
          <p className="artist-name">Artist: Kendall Roy</p>
          <p className="release-date">Release Date: February 18, 2024</p>
        </div>
      </div>

      <div className="release">
        <img src={GregAlbum} alt="Album 2" className="album-cover" />
        <div className="release-details">
          <h3 className="album-title">Electro Odyssey</h3>
          <p className="artist-name">Artist: Greg Hirsch</p>
          <p className="release-date">Release Date: February 15, 2024</p>
        </div>
      </div>

      {/* Add five more releases */}
      <div className="release">
        <img src={TomAlbum} alt="Album 3" className="album-cover" />
        <div className="release-details">
          <h3 className="album-title">Urban Vibes</h3>
          <p className="artist-name">Artist: Tom Wambsgans</p>
          <p className="release-date">Release Date: February 12, 2024</p>
        </div>
      </div>

      <div className="release">
        <img src={RomanAlbum} alt="Album 4" className="album-cover" />
        <div className="release-details">
          <h3 className="album-title">Dreamscape</h3>
          <p className="artist-name">Artist: Roman Roy</p>
          <p className="release-date">Release Date: February 10, 2024</p>
        </div>
      </div>

      <div className="release">
        <img src={GerriAlbum} alt="Album 5" className="album-cover" />
        <div className="release-details">
          <h3 className="album-title">Ethereal Echoes</h3>
          <p className="artist-name">Artist: Gerri Killman</p>
          <p className="release-date">Release Date: February 8, 2024</p>
        </div>
      </div>

      <div className="release">
        <img src={ConnorAlbum} alt="Album 6" className="album-cover" />
        <div className="release-details">
          <h3 className="album-title">Rhythmic Reverie</h3>
          <p className="artist-name">Artist: Connor Roy</p>
          <p className="release-date">Release Date: February 5, 2024</p>
        </div>
      </div>
      
    </div>
  );
}

export default Releases;
