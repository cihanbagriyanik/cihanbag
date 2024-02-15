import styled from "styled-components";

export const Logo = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  padding: 1rem;
  margin: 0.5rem 0 0 3rem;
  /* height: 85px;
  width: 85px; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    margin: 0.5rem 0 0 0rem;
  }
`;

export const LogoA = styled.a`
  font-family: "Girassol", serif;
  text-decoration: none;
  letter-spacing: 0.2rem;
  font-size: 2.2rem;

  color: grey;
  & span {
    color: white;
  }
`;

export const DarkButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: grey;
  font-size: 45px;
  cursor: pointer;
  /* -------------------------------------------------------------------------- */
  & :hover {
    color: white;
  }
  /* -------------------------------------------------------------------------- */
`;
