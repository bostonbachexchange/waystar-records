// News.js
import React from 'react';
import './News.css'; // Import the News page styles
import KendallPress from '../assets/KendallPress.jpeg'
import RomanPress from '../assets/romanNight.webp'
import ShivPress from '../assets/shiv2.webp'
import AwardPress from '../assets/kendallaward.jpeg'

const News = () => {
  return (
    <div className="news-container">
      <h2 className="page-title">Latest News</h2>
      
      <div className="news-item">
        <img src={KendallPress} alt="News 1" className="news-image" />
        <div className="news-details">
          <h3 className="news-title">New Album Release: "Revolution"</h3>
          <p className="news-description">Waystar Records is excited to announce the release of our latest album, "Revolution." Featuring tracks from our top artists, this album pushes boundaries and redefines the music industry. Available now on all streaming platforms.</p>
        </div>
      </div>

      <div className="news-item">
        <img src={AwardPress} alt="News 2" className="news-image" />
        <div className="news-details">
          <h3 className="news-title">Waystar Records Wins Big at Music Awards</h3>
          <p className="news-description">We're thrilled to share that Waystar Records took home multiple awards at this year's music awards ceremony. From Best New Artist to Album of the Year, our artists and team continue to shine on the global stage.</p>
        </div>
      </div>

      <div className="news-item">
        <img src={ShivPress} alt="News 1" className="news-image" />
        <div className="news-details">
          <h3 className="news-title">Shiv Roy Partners with Waystar Records for Exclusive Podcast</h3>
          <p className="news-description">Waystar Records is thrilled to announce a new partnership with Shiv Roy, daughter of media mogul Logan Roy. Shiv will host an exclusive podcast series featuring candid conversations with industry insiders, artists, and cultural icons. Stay tuned for behind-the-scenes insights and provocative discussions!</p>
        </div>
      </div>

      <div className="news-item">
        <img src={RomanPress} alt="News 2" className="news-image" />
        <div className="news-details">
          <h3 className="news-title">Roman Roy's Wild Night: Exclusive VIP Party at Waystar Records</h3>
          <p className="news-description">Waystar Records threw the party of the year, and Roman Roy was at the center of it all. The company's COO hosted an exclusive VIP event, bringing together music industry elite, celebrities, and influencers for a night of unforgettable entertainment. With performances by Waystar's top artists and surprises around every corner, it's no wonder Roman's parties are the talk of the town!</p>
        </div>
      </div>
      
    </div>
  );
}

export default News;
