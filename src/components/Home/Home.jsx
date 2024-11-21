import React from "react";
import "./Home.css";

const Home = ({ setCurrentPage }) => {

  return (
    <div className="home">
      <div className="heading">
        <h1>THE</h1>
        <h1 className="higher">SEARCH</h1>
        <h1 className="lower">WARS</h1>
        <h1>GAME</h1>
      </div>
      <div className="content">
        <h2>What gets Googled more?</h2>
        <div className="paragraph">
          <p>
            A frustratingly addictive game of higher or lower using Google
            searches.
          </p>
          <p>The data is based on global monthly searches in 2017.</p>
        </div>
      </div>
      <button onClick={() => setCurrentPage("game")}>Start the Game</button>
    </div>
  );
};

export default Home;
