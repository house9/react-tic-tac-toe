import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
// import { Link } from 'react-router'

export default function Navigation() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          Tic Tac Toe
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to='/'>
          <NavItem>Start Over</NavItem>
        </LinkContainer>
        <LinkContainer to='/game'>
          <NavItem>Play Game</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  )
}
