import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
  background-color: rgba(0, 0, 0, 0);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  `;

const MenuLink = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: #B2DFB2;
  }
`;

const HomeLink = styled.a`
  text-decoration: none;
  color: black;
`;

const NavHeader = styled.div`
  padding: 20 px 20 px;
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  `;

const NavLeft = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Open Sans',sans-serif;
  font-weight: 600;
  padding-left: 10px;
  `;
const InnerNav = styled.div`
  padding: 40px;
`;
const NavCenter = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  `;

const FirstName = styled.div`
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 150%;
  font-weight: 700;
  `;

const LastName = styled.div`
  text-align: center;
  font-family: 'Open Sans', sans-serif;;
  transform: rotate(-180deg);
  font-size: 150%;
  font-weight: 700;
  `;

const NavRight = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  padding-right: 10px;
  `;



function NavBar(){
  return (

    <Nav>
        <NavHeader>
          <NavLeft>
            <InnerNav>
            <MenuLink href="fiber">
              Fiber
            </MenuLink>
            </InnerNav>
            <InnerNav>
            <MenuLink href="code">
              Code
            </MenuLink>
            </InnerNav>
          </NavLeft>

          <NavCenter>
            <HomeLink href="/">
            <FirstName>Mary</FirstName>
            <LastName>Paul</LastName>
            </HomeLink>
          </NavCenter>

          <NavRight>
          <InnerNav>
            <MenuLink href="about">
              About
            </MenuLink>
            </InnerNav>
            <InnerNav>
            <MenuLink href="contact">
              Contact
            </MenuLink>
            </InnerNav>
          </NavRight>
        </NavHeader>
    </Nav>
  )
}

export default NavBar
