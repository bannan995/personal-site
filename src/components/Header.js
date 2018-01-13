import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import headerimage from '../Header-Logo.jpg'

const activeLink = {
  'textDecoration': 'underline'
}

const Nav = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
`

const LogoContainer = styled.div`
  position: absolute;
  right: 10px;
`

const NavLink = styled(Link)`
  display: inline-block;
  line-height: 30px;
  height: 30px;
  margin: 0 1em;
  float: left;

  &:hover {
    text-decoration: underline;
  }

  & img {
    max-height: 30px;
  }
`

class Bio extends React.Component {
  render() {
    return (
      <Nav>
        <NavLink to="/">Ashley Bannan</NavLink>
        <NavLink exact activeStyle={activeLink} to="/">Work</NavLink>
        <NavLink activeStyle={activeLink} to="about">About</NavLink>
        <LogoContainer>
          <NavLink to="/"><img src={headerimage} /></NavLink>
        </LogoContainer>
      </Nav>
    )
  }
}

export default Bio
