import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  padding: 20px 10px;
  height: 100%;
  justify-content: center;
`;

export const AllSkills = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  color: #63615f;
  /* font-size: 6rem; */

  align-items: left;
  justify-content: center;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  font-weight: 600;
  align-items: left;
  color: #000;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SkillElement = styled.div`
  img {
    width: 600px;
  }
`;

export const SkillIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SkillIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px 10px;

  p {
    margin-top: 15px;
    font-size: 0.6rem;
  }

  :hover {
    color: #6d7adf;
    transform: scale(1.02);
  }
`;
