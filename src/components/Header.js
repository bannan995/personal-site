import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const activeLink = {
  'textDecoration': 'underline'
}

const Nav = styled.div`
  width: 100%;
  height: 50px;

  & a {
    margin: 0 1em;
    padding: 0 .5em;
  }
`

const Logo = styled(Link)`
  display: inline-block;
  font-weight: bold;
  line-height: 50px;
`

const NavLink = styled(Link)`
  display: inline-block;
  line-height: 50px;

  &:hover {
    text-decoration: underline;
  }
`

class Bio extends React.Component {
  render() {
    return (
      <Nav>
        <Logo to="/">Ashley Bannan</Logo>
        <NavLink exact activeStyle={activeLink} to="/">Work</NavLink>
        <NavLink activeStyle={activeLink} to="about">About</NavLink>
      </Nav>
    )
  }
}

export default Bio
