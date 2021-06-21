import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  justify-content: center;
  padding: 8px;
  font-family: "Pangolin", cursive;

  p {
    letter-spacing: 0.5rem;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const NavBtn = styled.a`
  cursor: pointer;
  padding: 0px 10px;
  transition: all 0.2s ease-in-out;

  img {
    width: 30px;
    padding: 0px 20px;
    cursor: pointer;

    :hover {
      filter: brightness(150%);
    }
  }
`;
