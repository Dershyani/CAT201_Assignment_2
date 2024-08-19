import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import { Link as ScrollLink } from "react-scroll"; 

const Sidebar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
    toggle();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
        <ScrollLink
            to="home"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleHome}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="discover"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleHome}
          >
            Discover
          </ScrollLink>
          <ScrollLink
            to="products"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleHome}
          >
            Products
          </ScrollLink>
          <ScrollLink
            to="contacts"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleHome}
          >
            Team
          </ScrollLink>
          <ScrollLink
            to="reviews"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleHome}
          >
            Reviews
          </ScrollLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign Up</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
