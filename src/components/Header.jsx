import React from 'react'
import "../components/header.css";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";

const Header = () => {
  return (
    <div className='header-pokemon'>
        <img className="header-img" src={team1} alt="team 1"/>
        <img className="header-img" src={team2} alt="team 2"/>
        <img className="header-img" src={team3} alt="team 3"/>
    </div>
  )
}

export default Header