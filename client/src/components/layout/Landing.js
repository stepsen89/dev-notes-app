import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Notes App</h1>
          <h2 className="x-medium"> Learning && Coding made easy </h2>
          <p className="lead">
            Create your own notes to prepare for interviews, improve your
            learning experience and share with other like-minded developers
          </p>
          <div className="buttons">
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
