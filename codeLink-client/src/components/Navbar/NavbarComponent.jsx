import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import "react";
import { Link } from "react-router";
// import KeepLogo from "../../assets/logo.png";

const NavbarComponent = () => {
  return (
    <Navbar>
      <NavbarContainer>
        <NavbarBrand className="cursor-pointer">
          <Link to="/">
            {/* <img src={KeepLogo} alt="Keep" width="88" height="40" /> */}
            <h1 className="font-mono text-2xl ml-10 font-semibold"> <span className="text-gray-600">Code</span><span className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">Link</span></h1>
          </Link>
        </NavbarBrand>

        <NavbarList>
          <NavbarItem>
            {" "}
            <Link to="/">Home</Link>{" "}
          </NavbarItem>
          {/* <NavbarItem><Link to='/editor'>Editor Page</Link></NavbarItem> */}
          <NavbarItem>
            <Link to="/about">About</Link>
          </NavbarItem>
        </NavbarList>
        <NavbarList>
          <NavbarItem className="bg-emerald-500 text-white px-6 py-3 rounded-md hover:bg-emerald-600 hover:text-white transition duration-300 ease-in-out mr-5">
            New Room
          </NavbarItem>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>
            {" "}
            <Link to="/">Home</Link>{" "}
          </NavbarItem>
          <NavbarItem>
            <Link to="/about">About</Link>
          </NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
