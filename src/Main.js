import React from 'react'
import styled, { keyframes } from 'styled-components'
import sheep from './assets/bvdgp_1.mp4'
import microchip from './assets/p87fc.mp4'



const MenuLink = styled.a`
  text-decoration: underlined;
  color: black;
  &:hover {
    color: #458038;
  }
`;
const MainBackground = styled.div`
  background color: rgba(0, 0, 0, 0);
  height: 85vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  `;
const PlayerContainer = styled.div`
  padding-top: 100px;
  position: static;
  display: flex;
  align-items: center;
`;
const PlayerWrapper = styled.div`
  position: static;
`;



const BottomCenter = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  padding-bottom: 30px;
  font-family: 'Open Sans', sans-serif;
`;




function Main(){

  return (
    <MainBackground>
      <PlayerContainer>
      <PlayerWrapper>
        <video width="440" height="150%" autoPlay={true} muted loop>
            <source type="video/mp4" src= { sheep }/>
            Your browser does not support the video tag.
        </video>
      </PlayerWrapper>
      <PlayerWrapper>
        <video width="440" height="120%" autoPlay={true} muted loop>
          <source type="video/mp4" src= {microchip}/>
        </video>
      </PlayerWrapper>
      </PlayerContainer>
        <BottomCenter>Fiber Artist & Software Engineer</BottomCenter>
    </MainBackground>
  )
}

export default Main
