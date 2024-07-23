import React from 'react';
import { Link } from 'react-router-dom';
import jobs from './data/jobs';
import './JobList.css';

const JobList = () => {
  return (
    <div className="job-list">
      {jobs.map(job => (
        <div key={job.id} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <Link to={`/jobs/${job.id}`} className="more-info-button">+</Link>
        </div>
      ))}
    </div>
  );
};

export default JobList;