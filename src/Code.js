import React from 'react'
import styled from 'styled-components'
import albers from './assets/albers.jpg'
import picketVid from './assets/picketmov.mov'
import tinyVid from './assets/tinymov.mov'

const ProjectsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  min-height: 185vh;
  height: 100%
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: -1;
`;

const IndvProject = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  `;

const PlayerContainer = styled.div`
  width: 50%;
  padding-top: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PlayerWrapper = styled.div`
  position: relative;
  border: 2px solid grey;
`;

const ProjectText = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 20px;
`;

const ProjectFirstLine = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
`;

const TextFirstLine = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProjectDescription = styled.div`
  align-text: left;
`;

const ProjectTools = styled.div`
  align-text: center;
`
const ProjectImages = styled.div`
  width: 100%;
  height: auto;
  position: static;
  display: flex;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  width: auto;
  height: auto;
  display:flex;
  position: relative;
  align-content: flex-start;
  padding: 6px;
`;

function Code(){

  return(
   <ProjectsContainer>
      <IndvProject>
        <ProjectFirstLine>
          <PlayerContainer>
            <PlayerWrapper>
              <video width="512" autoPlay muted loop> <source type="video/mp4" src={picketVid}/>
              </video>
            </PlayerWrapper>
          </PlayerContainer>
          <ProjectText>
            <TextFirstLine>
              <div>Picket</div>
              <a href="https://github.com/PicketNow/picket">> View source code</a>
            </TextFirstLine>
            <ProjectDescription>PWA focused on activism</ProjectDescription>
            <ProjectTools>React | Node | etc</ProjectTools>
          </ProjectText>
        </ProjectFirstLine>
        <ProjectImages>
        </ProjectImages>
     </IndvProject>
     <IndvProject>
        <ProjectFirstLine>
          <ProjectText>
            <TextFirstLine>
              <div>Tiny Made</div>
              <a href="https://github.com/1911-grace-shopper/grace-shopper">> View source code</a>
            </TextFirstLine>
            <ProjectDescription>E-commerce site selling tiny homes</ProjectDescription>
            <ProjectTools>React | Node | etc</ProjectTools>
          </ProjectText>
          <PlayerContainer>
            <PlayerWrapper>
              <video width="512" autoPlay muted loop> <source type="video/mp4" src={tinyVid}/>
              </video>
            </PlayerWrapper>
          </PlayerContainer>
        </ProjectFirstLine>
        <ProjectImages>
        </ProjectImages>
     </IndvProject>
   </ProjectsContainer>
  )
}

export default Code
