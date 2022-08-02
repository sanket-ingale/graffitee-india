import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from './Jumbotron';

export default function Home() {
  return (
    <div className="home">
      <Jumbotron/>
      <div className='cards'>
        <Link to="/explore" className="cards--anchor">
          <img
            className="cards--item"
            src={require("../../../src/images/anime.png")}
            alt="First slide"
          />
        </Link>
        <Link to="/explore" className="cards--anchor">
          <img
            className="cards--item"
            src={require("../../../src/images/typog.png")}
            alt="First slide"
          />
        </Link>
        <Link to="/explore" className="cards--anchor">
          <img
            className="cards--item"
            src={require("../../../src/images/customd.png")}
            alt="First slide"
          />
        </Link>
        <Link to="/explore" className="cards--anchor">
          <img
            className="cards--item"
            src={require("../../../src/images/solid.png")}
            alt="First slide"
          />
        </Link>
      </div>
      <Jumbotron/>
    </div>
  );
}

