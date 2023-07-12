import React from "react";
import Navbar from "./navbar";
import "./App.css";
import Footer from "./footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="video-container">
        <video className="background-video" autoPlay playsInline muted loop>
          <source
            src="/pexels-george-morina-5962497 (1080p).mp4"
            type="video/mp4"
          />
          {/* Provide fallback content for non-supporting browsers */}
        </video>
        <div className="content-wrapper">
          <div className="centered-text">
            Glen is this what you wanted
            <span role="img" aria-label="Cool Emoji" className="emoji">
              😎
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
