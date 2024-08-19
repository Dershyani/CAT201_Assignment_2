import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  //   margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #22221f;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  /* Remove the margin-left property */
  
  @media screen and (max-width: 768px) {
    /* You can adjust styles for smaller screens if needed */
  }
`;



export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    transform: translate(-100, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #22221f;
  }
`;

export const NavMenu = styled.ul`
display: flex;
align-items;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavItem = styled.li`
  height: 80px;
`;


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #22221f;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e6e5e3;
    color: #22221f;
  }
`;
