import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from 'keep-react';
import { Image } from 'phosphor-react';
import 'react';
import { Link } from 'react-router';
import KeepLogo from "../../assets/logo1.png";


const NavbarComponent = () => {
    return (
<Navbar>
      <NavbarContainer>
        <NavbarBrand>
          <Image src={KeepLogo} alt="keep" width="88" height="40" />
        </NavbarBrand>
        <NavbarList>
          <NavbarItem> <Link to='/'>Home</Link> </NavbarItem>
          <NavbarItem><Link to='/editor'>Editor Page</Link></NavbarItem>
          <NavbarItem><Link to='/About'>About</Link></NavbarItem>
        </NavbarList>
        <NavbarList>
          <NavbarItem>Sign In</NavbarItem>
          <NavbarItem active={true}>Sign Up</NavbarItem>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
          <NavbarItem>Sign In</NavbarItem>
          <NavbarItem active={true}>Sign Up</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
    );
};

export default NavbarComponent;