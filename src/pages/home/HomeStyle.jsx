import styled from "styled-components";

export const HomeMainDiv = styled.div`
  /* font-family: "Montserrat", sans-serif; */
  font-family: "Girassol", serif;
  margin-top: 5rem;
`;

export const HomeTopTextDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TopTextPDiv = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2rem;

  & a {
    text-decoration: none;
    color: var(--text1);

    &:hover {
      color: var(--link);
    }
  }

  @media (max-width: 550px) {
    margin-left: -5rem;
  }
`;

export const TopTextP = styled.p`
  font-family: "Montserrat", sans-serif;
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: 900;
  margin-bottom: 0;
  text-transform: uppercase;
  & span {
    padding-bottom: 0.5rem;
    border-bottom: 2px solid gray;
  }
`;
export const TopTextFirtsH1 = styled.h1`
  /* font-weight: 600; */
  text-shadow: 1px 1px black;
  margin-top: 2rem;
`;
export const TopTextSecondH1 = styled.h1`
  font-style: italic;
  color: gray;
  font-weight: 500;
  margin-bottom: 3rem;
`;

export const DivA = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (max-width: 550px) {
    margin-top: -2rem;
  }
`;

export const TopImg = styled.div`
  & img {
    border: 2px solid black;
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;
