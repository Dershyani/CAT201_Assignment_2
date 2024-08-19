import React, { useState, useEffect } from "react";
import "./custom.css";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavBtnLink,
  NavBtn,
} from "./NavbarElements";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Leafy
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  className="custom-link"
                >
                  Home
                </ScrollLink>
              </NavItem>
              <NavItem>
                <ScrollLink
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  className="custom-link"
                >
                  Discover
                </ScrollLink>
              </NavItem>
              <NavItem>
                <ScrollLink
                  to="products"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  className="custom-link"
                >
                  Products
                </ScrollLink>
              </NavItem>
              <NavItem>
                <ScrollLink
                  to="contacts"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  className="custom-link"
                >
                  Team
                </ScrollLink>
              </NavItem>
              <NavItem>
                <ScrollLink
                  to="reviews"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  className="custom-link"
                >
                  Reviews
                </ScrollLink>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign Up</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
