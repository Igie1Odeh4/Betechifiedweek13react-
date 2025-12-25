import React from "react";
import Counter from "./Counter"; // Import the Counter component
import "./Home.css"; // We'll put styles in a CSS file

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to ABS Stores</h1>
      <Counter /> {/* Render Counter here */}
    </div>
  );
}

export default Home;
