// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import AddJob from './AddJob';
import JobList from './JobList';
import JobDetail from './JobDetails';

const ConditionalNav = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path === '/'){
    return null;
  }

  return (
    <nav className="navbar">
      <div className="left-nav">
        {path !== '/' && (
          <Link to="/" className="home-link">Home</Link>
        )}
      </div>
      <div className="right-nav">
        {path !== '/add-job' && (
          <Link to="/add-job">
            <button>Add Job</button>
          </Link>
        )}
        {path !== '/jobs' && (
          <Link to="/jobs">
            <button>View Job Listings</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
          <ConditionalNav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
