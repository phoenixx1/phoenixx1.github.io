import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 635px;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: #ee7e05;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;

  .MuiButton-root {
    background: #3c74d3;
    padding: 10px;
    font-weight: 600;

    :hover {
      background: #ee7e05;
      color: white;
      transform: scale(1.01);
    }
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: "#010606";
`;

export const Img = styled.img`
  width: 300px;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 50%;
  border: 5px solid #000;
`;
