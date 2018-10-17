import React, {Component} from 'react';
import styled from 'tachyons-components';

const HeaderStyled = styled('header')`
  bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l
`;

const Nav = styled('nav')`
  flex justify-between w-100 mw8 center
`
const NavLink = styled('a')`
  link dim white dib mr3
`

export class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <Nav>
          <div className="flex w2 v-mid pa3">
        <span className="dim white">Weahter App</span>
        </div>
        <div className="flex v-mid tr pa3">
        <NavLink href="/login">Login/Signup</NavLink>
        <NavLink href="#">Set location: [currently using Phoenix Az]</NavLink>
        </div>
        </Nav>       
      </HeaderStyled>
    )
  }
}

export default Header;