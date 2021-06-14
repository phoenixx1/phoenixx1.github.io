import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  padding: 20px 10px;
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

export const AllSkills = styled.div`
  display: flex;
  font-size: 6rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1000px;

  > * {
    padding: 15px;
    margin: 10px 10px;
    color: #333333;
    box-shadow: 6px 7px 47px -5px rgba(0, 0, 0, 0.72);
    -webkit-box-shadow: 6px 7px 47px -5px rgba(0, 0, 0, 0.72);
    -moz-box-shadow: 6px 7px 47px -5px rgba(0, 0, 0, 0.72);

    :hover {
      color: #2e41cf;
      transform: scale(1.02);
    }
  }
`;
