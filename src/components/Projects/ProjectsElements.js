import styled from "styled-components";

export const ProjectsContainer = styled.div`
  background-color: #1e3a82;
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
  color: #000;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AllProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1500px;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 15px;
  margin-right: 50px;
  width: 410px;
  margin-top: 20px;
  border-radius: 5%;

  box-shadow: 10px 10px 50px 13px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 50px 13px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 50px 13px rgba(0, 0, 0, 0.75);
`;

export const PrjImg = styled.img`
  width: 400px;
  height: auto;
  border-radius: 3%;
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid grey;
`;

export const PrjTitle = styled.h2``;

export const Stacks = styled.div`
  font-size: 2rem;
  display: flex;
  flex-wrap: wrap;
  width: auto;
  margin-bottom: 5px;
  margin-bottom: 20px;

  > * {
    padding: 8px;
    margin: 0px 5px;
  }
`;

export const SourceButtons = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  .MuiButton-root {
    background: #ee7e05;
    padding: 8px;
    font-weight: 600;

    :hover {
      background: #3c74d3;
      color: white;
      transform: scale(1.01);
    }
  }
`;
