import React from 'react'
import styled from 'styled-components';

import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";

const Container = styled.div `
display: flex;
    align-items: center;
    justify-content: space-around;
    `

const Image = styled.img `
filter: drop-shadow(0 0 0.75rem rgb(220, 18, 124));
    width: 15rem;
    height: 15rem;
`

const Header = () => {
  return (
    <Container>
        <Image src={team1} alt="team 1"/>
        <Image src={team2} alt="team 2"/>
        <Image src={team3} alt="team 3"/>
    </Container>
  )
}

export default Header