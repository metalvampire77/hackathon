import React from "react";
import './Home.css'

const Home = () => {
  const [selected, setSelected] = React.useState("PI");

  return (
    <div className="homepage-container">
      <div className="title-container">
        <h1>Hidden Voices</h1>
        <h2>User Login / Profile Details</h2>
      </div>

      <div className="project-description-container">
        <h3>Project Description</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero.
        </p>
      </div>

      <div className="tabs-container">
        <div
          className={`tab ${selected === "PI" ? "active" : ""}`}
          onClick={() => setSelected("PI")}
        >
          PI
        </div>
        <div
          className={`tab ${selected === "ΡΙ" ? "active" : ""}`}
          onClick={() => setSelected("ΡΙ")}
        >
          ΡΙ
        </div>
        <div
          className={`tab ${selected === "PM" ? "active" : ""}`}
          onClick={() => setSelected("PM")}
        >
          PM
        </div>
      </div>

      <div className="content-container">
        {selected === "PI" && (
          <div className="pi-content">
            <h3>PI Content</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </p>
          </div>
        )}
        {selected === "ΡΙ" && (
          <div className="ri-content">
            <h3>ΡΙ Content</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </p>
          </div>
        )}
        {selected === "PM" && (
          <div className="pm-content">
            <h3>PM Content</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </p>
          </div>
        )}
      </div>

      <div className="team-container">
        <h3>Team</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero.
        </p>
      </div>

      <div className="generate-biography-container">
        <h3>Generate Biography</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero.
        </p>
      </div>

      <div className="look-for-women-container">
        <h3>Look for Women</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero.
        </p>
      </div>

      <div className="data-collection-container">
        <h3>Data Collection</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero.
        </p>
      </div>

      <div className="achievers-container">
        <h3>Achievers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero.
        </p></div>
    </div>
  );
};

export default Home;