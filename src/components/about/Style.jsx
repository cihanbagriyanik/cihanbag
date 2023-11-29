import styled from "styled-components";

//! ABOUT ME***********

//! AboutMe TOP
export const AboutMeDiv = styled.div`
  margin: 3rem 5rem 4rem 5rem;

  @media (max-width: 700px) {
    margin: 2rem 1rem 2rem 2rem;
  }
  @media (max-width: 550px) {
    margin: 1.5rem 1rem 3rem 1.5rem;
  }
`;

export const AboutMeH6 = styled.h6`
  color: var(--link);
  font-size: 1.5rem;
  font-weight: 600;
`;

export const AboutMeH1 = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  @media (max-width: 920px) {
    font-size: 1.5rem;
  }
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
`;
//! AboutMe Down
export const AboutMeDownDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  /* @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
  } */
`;

export const AboutMeDownH4 = styled.h4`
  font-weight: 600;
  color: var(--link);
  font-size: 1.5rem;
  display: inline-block;
  margin: 0.5rem 0;
  @media (max-width: 920px) {
    width: auto;
    font-size: 1.5rem;
    font-weight: 900;
  }
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const AboutMeDownP = styled.p`
  width: 100%;
  font-size: 1.2rem;
  margin: 0.5rem 0 0;
  padding: 0 1rem;
  @media (max-width: 920px) {
    width: auto;
    font-size: 1.2rem;
  }
`;

//! MySkills
export const SkillsMainDiv = styled.div`
  background-color: lightgray;
  font-size: 1.1rem;
  margin: 5rem;
  padding: 1rem 2rem;
  margin: auto;
  text-align: center;
`;

export const SkillsLi = styled.li`
  list-style: none;
`;
