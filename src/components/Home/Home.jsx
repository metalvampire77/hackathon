import React from "react";
import "./Home.css";

const Home = () => {
  const [selected, setSelected] = React.useState("PI");

  return (
    <div className="homeMain">
      <div className="homepage-container">
        <div className="name">
          <p>Hidden Voices</p>
          <p>
            <button className="user">User Login/Profile Details</button>
          </p>
        </div>
        <div className="projectDetails">project description</div>
        <div className="circle"><button className="circle-btn">PI</button>
        <button className="circle-btn">PI</button>
        <button className="circle-btn">PM</button>
        <button className="circle-btn">Team</button>
        <button className="circle-btn">Team</button></div>
        <div className="buttons">
          <button className="bio btn">Generate biography</button>
          <button className="search btn">search</button>
          <button className="addData btn">add data</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
