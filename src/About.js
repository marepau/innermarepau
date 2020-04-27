import React, {Link} from 'react'
import styled from 'styled-components'
import selfie from './assets/selfie.png'
// import albers from './assets/albers.jpg'
// import cv from './assets/MP_2020ptr.pdf'


const ProjectsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
  z-index: -1;
  top: 0;
`;

const SelfPortrait = styled.div`
  max-width: 46%;
  display: flex;
  overflow: hidden;
`;

const Bio = styled.div`
  width: 46%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Open Sans',sans-serif;
  align-text: center;
`;

function About(){
  return(
    <ProjectsContainer>
      <SelfPortrait>
        <img src={selfie} width="500"></img>
      </SelfPortrait>
      <Bio>
        Before Grace Hopper I was lost. I was weaving on the coast-- the edge.
      </Bio>
      <a href="%PUBLIC_URL%/MP_2020ptr.pdf" download="Mary_Paul_CV">
        > Download my cv!
      </a>

    </ProjectsContainer>
  )
}

export default About
