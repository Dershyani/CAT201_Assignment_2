import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background: #22221F;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;

  @media (max-width: 768px) {
    margin-left: 0;
    align-items: center;
    text-align: center;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const NormalText = styled.p`
  font-size: 16px;
  color: #E6E5E3; /* Change the color as desired */
  margin-bottom: 10px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
