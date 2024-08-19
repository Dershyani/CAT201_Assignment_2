import React from "react";
import {
  Container,
  Wrapper,
  Row,
  Column,
  Title,
} from "./FooterElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa, faCcMastercard, faPaypal, faGooglePay } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { Button } from "../ButtonElements"; // Import the Button component
import { Link } from "react-scroll";

export const CustomCardImage = styled.img`
  width: 50px; /* Adjust the width as needed */
  height: auto; /* Automatically adjust the height to maintain aspect ratio */
  margin-top: 10px; /* Add some top margin for spacing */
  /* Add any other CSS styles you need for alignment */
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px; /* Add some top margin for spacing */
`;

const ColoredIcon = styled(FontAwesomeIcon)`
  font-size: 36px;
  margin: 0 10px;
  color: #E6E5E3; /* Change the color as desired */
`;

const NormalText = styled.p`
  font-size: 16px;
  color: #E6E5E3; /* Change the color as desired */
  margin-bottom: 10px;
`;

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Register to stay updated</Footer.Title>
            <Button
              to="#registration"
              primary={true}
            >
              Register
            </Button>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Our Address</Footer.Title>
            <NormalText>11800 USM</NormalText>
            <NormalText>Penang</NormalText>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <NormalText>04-653 3777</NormalText>
            <NormalText>Leafy.co@gmail.com</NormalText>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Payment Method</Footer.Title>
            <IconWrapper>
              <ColoredIcon icon={faCcVisa} />
              <ColoredIcon icon={faCcMastercard} />
              <ColoredIcon icon={faPaypal} />
              <ColoredIcon icon={faGooglePay} />
            </IconWrapper>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
