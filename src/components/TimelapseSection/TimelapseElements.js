import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  background: #0c0c0c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 2; /* Increase z-index to ensure it's behind the video */
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: -550px; /* Adjust margin-top as needed */
`;

export const HeroH1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #e6e5e3;
  margin-top: 100px; /* Adjust margin-top as needed */
  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const HeroP = styled.p`
  margin-top: 10px; /* Adjust margin-top as needed */
  font-weight: 500;
  color: #e6e5e3;
  font-size: 20px;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 20px; /* Adjust margin-top as needed */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReviewSection = styled.section`
  display: ${(props) => (props.showReviews ? "block" : "none")};
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  padding: 20px 0;
  z-index: 2;
  text-align: center;
  bottom: 0;
`;

export const ReviewSlider = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px;
`;

export const ReviewCard = styled.div`
  background: #e6e5e3;
  border: 1px solid #ddd;
  padding: 20px;
  width: 400px;
  span {
    color: #ffcc00;
  }
  h3,
  p {
    color: #22221f;
  }
`;
