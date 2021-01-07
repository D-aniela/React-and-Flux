import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Flux, and React Router for ultra-responsive web apps</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

//Si un solo elemento es exportado, entonces es declarado como el "default"
export default HomePage;
