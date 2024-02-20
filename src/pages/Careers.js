// src/pages/Careers.js
import React from 'react';

const Careers = () => {
  return (
    <div>
      <h2>Career Opportunities</h2>
      <p>Join the Waystar Records team and be a part of the music revolution led by Kendall Roy!</p>
      <div className="job-listing">
        <h3>[Position Title]</h3>
        <p>Description: [Job Description]</p>
        <button>Apply Now</button>
      </div>
      {/* Repeat the above for each job listing */}
    </div>
  );
}

export default Careers;
