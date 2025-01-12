import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from 'keep-react';
import 'react';
import { Link } from 'react-router';
import KeepLogo from "../../assets/logo.png";
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';


const NavbarComponent = () => {
    return (
<Navbar>
      <NavbarContainer>
      <NavbarBrand className="cursor-pointer">
  <Link to="/">
    <img src={KeepLogo} alt="Keep" width="88" height="40" />
  </Link>
</NavbarBrand>

        <NavbarList>
          <NavbarItem> <Link to='/'>Home</Link> </NavbarItem>
          {/* <NavbarItem><Link to='/editor'>Editor Page</Link></NavbarItem> */}
          <NavbarItem><Link to='/about'>About</Link></NavbarItem>
        </NavbarList>
        <ThemeSwitcher/>
        <NavbarList>
          <NavbarItem className="bg-emerald-500 text-white px-6 py-3 rounded-md hover:bg-emerald-600 hover:text-white transition duration-300 ease-in-out mr-5">New Room</NavbarItem>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem className='bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 hover:text-white transition duration-300 ease-in-out'>Sign In</NavbarItem>
          <NavbarItem active={true}>Sign Up</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
    );
};

export default NavbarComponent;