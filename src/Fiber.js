import React from 'react'
import styled from 'styled-components'
import albers from './assets/albers.jpg'
import chairOne from './assets/chair_rock.png'
import chairTwo from './assets/chair_snow.png'

const ProjectsContainer = styled.div`
  // background-image: url(${albers});
  width: 100%;
  min-height: 85vh;
  display: flex;
  position: relative;
  z-index: -1;
`;


const IndvProject = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  `;

const ProjectImages = styled.div`
  width: 45%;
  height: auto;
  position: static;
  display: flex;
  justify-content: flex-end;
`;

const ImageWrapper = styled.div`
  width: auto;
  height: auto;
  display:flex;
  position: relative;
  align-content: flex-start;
  padding: 6px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto
`;

const ProjectText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const ProjectTitle = styled.div`
  align-text: left;
`;

const ProjectDescription = styled.div`
  align-text: left;
`;


function Fiber(){
  return(
    <ProjectsContainer>
      <IndvProject>
        <ProjectImages>
          <ImageWrapper>
            <Image src={chairTwo}/>
          </ImageWrapper>
          <ImageWrapper>
            <Image src={chairOne}/>
          </ImageWrapper>
        </ProjectImages>
        <ProjectText>
          <ProjectTitle>
            Pine Hill Chair
          </ProjectTitle>
          <ProjectDescription>
            Wood, Nylon.
            2020
          </ProjectDescription>
        </ProjectText>
      </IndvProject>
    </ProjectsContainer>
  )
}

export default Fiber
