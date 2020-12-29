import React from "react";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Flux, and React Router for ultra-responsive web apps</p>
      <a href="/about">About</a>
    </div>
  );
}

//Si un solo elemento es exportado, entonces es declarado como el "default"
export default HomePage;
