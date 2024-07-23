import React from 'react';
import { useParams } from 'react-router-dom';
import jobs from './data/jobs';
import './JobDetails.css';

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find(job => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="job-detail">
      <h2>{job.title}</h2>
      <p><strong>Location:</strong>{job.moreInfo.location}</p>
      <p><strong>jobType:</strong>{job.moreInfo.jobType}</p>
      <p>{job.moreInfo.fullDescription}</p>
    </div>
  );
};


export default JobDetail;
