// Artists.js
import React from 'react';
import './Artists.css'; // Import the Artists page styles
import KendallImage from '../assets/kendall2.jpg'
import RomanImage from '../assets/Roman.jpg'
import GregImage from '../assets/Greg.webp'
import TomImage from '../assets/Tom.jpeg'
import ShivlImage from '../assets/Shiv.webp'

const Artists = () => {
  return (
    <div className="artists-container">
      <h2 className="page-title">Meet Our Artists</h2>
      
      <div className="artist">
        <img src={KendallImage} alt="Kendall Roy" className="artist-image" />
        <div className="artist-details">
          <h3 className="artist-name">Kendall Roy</h3>
          <p className="artist-bio">As the CEO of Roy Sound Enterprises, Kendall Roy is not only a master of the boardroom but also a visionary artist. With his unique blend of raw talent and business acumen, Kendall brings a fresh perspective to the music industry, pushing boundaries and challenging norms with every beat.</p>
        </div>
      </div>

      {/* Roman Roy */}
      <div className="artist">
        <img src={RomanImage} alt="Roman Roy" className="artist-image" />
        <div className="artist-details">
          <h3 className="artist-name">Roman Roy</h3>
          {/* "Rotten Cabal is a good name for a band" S3E02 */}
          <p className="artist-bio">Roman Roy is not just a name; it's a brand. With his magnetic personality and infectious energy, Roman commands attention both on and off the stage. His music is a celebration of life's highs and lows, infused with a sense of rebellion and a touch of nostalgia.</p>
        </div>
      </div>

      <div className="artist">
        <img src={ShivlImage} alt="Shiv Roy" className="artist-image" />
        <div className="artist-details">
          <h3 className="artist-name">Shiv Roy</h3>
          <p className="artist-bio">Shiv Roy is not just a powerful force in the corporate world; she's also a force to be reckoned with on stage. With her commanding presence and captivating vocals, Shiv mesmerizes audiences and leaves them wanting more. Her music is a reflection of her fierce determination and unwavering ambition.</p>
        </div>
      </div>

      {/* Add more artists here */}

{/* Tom Wambsgans */}
<div className="artist">
        <img src={TomImage} alt="Tom Wambsgans" className="artist-image" />
        <div className="artist-details">
          <h3 className="artist-name">Tom Wambsgans</h3>
          <p className="artist-bio">Tom Wambsgans may be known for his corporate savvy, but his musical talents are equally impressive. With his knack for storytelling and catchy melodies, Tom captures the essence of modern life in his songs, blending humor and heartache into a uniquely relatable sound.</p>
        </div>
      </div>

      {/* Greg Hirsch */}
      <div className="artist">
        <img src={GregImage} alt="Greg Hirsch" className="artist-image" />
        <div className="artist-details">
          <h3 className="artist-name">Greg Hirsch</h3>
          <p className="artist-bio">Greg Hirsch may be the ultimate "outsider," but his music speaks volumes to the human experience. With his quirky charm and earnest lyrics, Greg invites listeners into his world of awkward encounters and unexpected adventures, proving that sometimes the best songs come from the most unexpected places.</p>
        </div>
      </div>
    </div>
  );
}

export default Artists;
