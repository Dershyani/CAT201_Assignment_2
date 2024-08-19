import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -50px; /* Adjust this value to move the content up */
  @media screen and (max-width: 480px) {
    height: 600px;
    margin-top: -20px; /* Adjust for smaller screens */
  }
  @media screen and (min-width: 1200px) {
    height: 600px;
    margin-top: -150px; /* Adjust for smaller screens */
  }
  @media screen and (max-width: 768px) {
    height: 600px;
    margin-top: -180px; /* Adjust for smaller screens */
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #2221F;
  margin-bottom: 15px;
  text-align: center;
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const AdditionalText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #555;
  margin-bottom: 20px;
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  height: 300px; // Adjust the height as needed

  @media screen and (min-width: 1200px) {
    margin-top: -150px; // Adjust the margin for larger screens
  }

  @media screen and (max-width: 768px) {
    height: 300px; // Adjust the height for smaller screens
    margin-top: -30px; // Adjust this value for smaller screens if needed
  }
`;

export const Video = styled.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
