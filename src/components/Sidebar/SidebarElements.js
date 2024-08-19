import styled from "styled-components";
import { Link as LinkS } from "react-router-dom";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

// Sidebar background container
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999; // Ensure sidebar is above other content
  width: 100%;
  height: 100%;
  background: #22221f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  font-size: 1.3rem;
  font-weight: 500px;
  font-family: "Poppins", sans-serif;
`;

// Close icon for the sidebar
export const CloseIcon = styled(FaTimes)`
  color: #fff; // Make it visible against the dark background
`;

// Icon container for styling
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

// Wrapper for sidebar content
export const SidebarWrapper = styled.div`
  color: #fff;
`;

// Menu for the sidebar links
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

// Individual link items in the sidebar
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #747468;
    transition: 0.2s ease-in-out;
  }
`;

// Button wrapper in the sidebar
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

// Route for the sign-up button
export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: white;
  white-space: nowrap;
  padding: 10px 30px;
  color: #010606;
  font-size: 1.3rem;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #747468;
    color: black;
  }
`;
