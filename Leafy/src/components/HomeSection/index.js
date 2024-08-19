import React, { useState } from "react";
import Image from "../../images/Image.png";
import { Button } from "../ButtonElements";
import {
  HomeContainer,
  HomeBg,
  ImageBg,
  HomeContent,
  HomeH1,
  HomeP,
  HomeBtnWrapper,
} from "./HomeElements";

const HomeSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HomeContainer id='home'>
      <HomeBg>
        <ImageBg src={Image} type="Image/png" />
      </HomeBg>
      <HomeContent>
        <HomeH1>Plants</HomeH1>
        <HomeP>
          Shop where you can buy any plant<br></br>and we will deliver it
          straight to your door
        </HomeP>
        <HomeBtnWrapper>
          <Button
            to="products"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
          >
            Explore Plants 
          </Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeSection;
