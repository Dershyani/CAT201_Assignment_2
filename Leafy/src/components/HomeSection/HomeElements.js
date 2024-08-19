import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #e6e5e3;
  position: relative;
  top: -200px; /* Adjust this value to bring it up */
  @media screen and (min-width: 1200px) {
    top: -20px; /* Adjust this value to bring it up */
  }
`;

export const HomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  margin-top: -150px; /* Negative margin to pull it up */
  @media screen and (min-width: 1200px) {
    top: 480px; /* Adjust this value to bring it up */
  }
`;

export const HomeH1 = styled.h1`
  color: #22221f;
  font-size: 150px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 90px;
  }
`;

export const HomeP = styled.p`
  margin-top: -20px;
  color: #444440;
  font-size: 25px;
  text-align: center;
  max-width: 600px;
  font-family: "Poppins", sans-serif;
  font-weight: medium;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

export const HomeBtnWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
