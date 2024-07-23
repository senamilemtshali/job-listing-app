import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <nav className="navbar">
          <div className="left-nav">
            <Link to="/" className="home-link">Home</Link>
          </div>
          <div className="right-nav">
            <Link to="/add-job">
              <button>Add Job</button>
            </Link>
            <Link to="/jobs">
              <button>View Job Listings</button>
            </Link>
            <a href="/login">
              <button>Sign In</button>
            </a>
          </div>
        </nav>
        <div className="header-content">
          <h1>Unlimited job opportunities</h1>
          <h3>Apply anywhere. Anytime.</h3>
          <p>Ready to start your career? Enter your email to create your account</p>
          <form className="email-signup" action="/sign-up" method="get">
            <input type="email" placeholder="Email address" required />
            <button type="submit">Get started</button>
          </form>
        </div>
      </header>

      <section className="features">
        <div className="row">
          <div className="text-col">
            <h2>Find your dream job.</h2>
            <p>Explore thousands of job listings from top companies.</p>
          </div>
          <div className="img-col">
            <img src="/images/image-1.jpg" alt="Feature 1" />
          </div>
        </div>
        <div className="row">
          <div className="img-col">
            <img src="/images/image-2.jpg" alt="Feature 2" />
          </div>
          <div className="text-col">
            <h2>Easy application process.</h2>
            <p>Apply for jobs with a single click.</p>
          </div>
        </div>
        <div className="row">
          <div className="text-col">
            <h2>Job alerts.</h2>
            <p>Get notified about new job openings that match your profile.</p>
          </div>
          <div className="img-col">
            <img src="/images/image-3.jpg" alt="Feature 3" />
          </div>
        </div>
      </section>

      <section className="FAQ">
        <h2>FAQ</h2>
        <ul className="accordion">
          <li>
            <input type="radio" name="accordion" id="first" />
            <label htmlFor="first">What is this platform?</label>
            <div className="content">
              <p>This platform connects job seekers with employers across various industries.</p>
            </div>
          </li>
          {/* Add more FAQ items here */}
        </ul>
      </section>

      <footer className="footer">
        <h2>Questions? Call 0 801-000-723</h2>
        <div className="row">
          <div className="col"> 
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>
          {/* Add more footer columns here */}
        </div>
        <p className="copyright-txt">Job Listing Platform</p>
      </footer>
    </div>
  );
};

export default HomePage;
