import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1 px solid rgba(0, 0, 0, 0.0975);
  transition: 0.25s;
  `;

const NavHeader = styled.div`
  max-width: 1010px;
  padding: 20 px 20 px;
  width: 100%;
  height: 10em;
  display: flex;
  align-items: center;
  margin: 0 auto;
  position: fixed;
  transition: 0.25s;
  `;

const NavLeft = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  `;

const NavCenter = styled.div`
  width: 20%;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  `;

const FirstName = styled.div`
  text-align: center;
  font-family: 'Ultra', serif;
  `;

const LastName = styled.div`
  text-align: center;
  font-family: 'Ultra', serif;
  transform: rotate(-180deg)
  `;

const NavRight = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  `;

const MenuLink = styled.a``

function NavBar(){
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <MenuLink href="#">
            Fiber
          </MenuLink>
          <MenuLink href="#">
            Code
          </MenuLink>
        </NavLeft>

        <NavCenter>
          <FirstName>Mary</FirstName>
          <LastName>Paul</LastName>
        </NavCenter>

        <NavRight>
          <MenuLink href="#">
            About
          </MenuLink>
          <MenuLink href="#">
            Contact
          </MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
  )
}

export default NavBar
