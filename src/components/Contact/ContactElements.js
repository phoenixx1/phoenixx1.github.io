import styled from "styled-components";

export const AboutContainer = styled.div`
  background: hsla(223, 62%, 31%, 1);

  background: linear-gradient(
    270deg,
    hsla(223, 62%, 31%, 1) 7%,
    hsla(224, 61%, 33%, 1) 23%,
    hsla(225, 55%, 39%, 1) 45%,
    hsla(228, 50%, 49%, 1) 67%,
    hsla(229, 62%, 57%, 1) 81%,
    hsla(230, 90%, 68%, 1) 98%
  );

  background: -moz-linear-gradient(
    270deg,
    hsla(223, 62%, 31%, 1) 7%,
    hsla(224, 61%, 33%, 1) 23%,
    hsla(225, 55%, 39%, 1) 45%,
    hsla(228, 50%, 49%, 1) 67%,
    hsla(229, 62%, 57%, 1) 81%,
    hsla(230, 90%, 68%, 1) 98%
  );

  background: -webkit-linear-gradient(
    270deg,
    hsla(223, 62%, 31%, 1) 7%,
    hsla(224, 61%, 33%, 1) 23%,
    hsla(225, 55%, 39%, 1) 45%,
    hsla(228, 50%, 49%, 1) 67%,
    hsla(229, 62%, 57%, 1) 81%,
    hsla(230, 90%, 68%, 1) 98%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#1E3A82", endColorstr="#213D87", GradientType=1 );
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 635px; */
  overflow-x: hidden;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1500px;
  height: 100%;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

export const Column1 = styled.div`
  padding: 0 15px;
  word-spacing: 0.5rem;
  letter-spacing: 0.1rem;
  margin-left: 10px;
  .sub {
    color: #999999;
    display: flex;
    align-items: center;
  }

  .location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
  }
`;

export const Column2 = styled.div`
  padding: 0 15px;
  margin-right: 10px;

  img {
    width: 300px;
    padding-right: 0;
    border-radius: 50%;
    border: 5px solid #fff;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 25px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: #ee7e05;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  max-width: 800px;
  color: "#010606";
`;

export const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const NavBtn = styled.a`
  cursor: pointer;
  padding: 8px;
  margin-right: 10px;
  transition: all 0.2s ease-in-out;

  img {
    width: 40px;
    cursor: pointer;

    :hover {
      transform: scale(1.05);
      filter: brightness(150%);
    }
  }
`;
