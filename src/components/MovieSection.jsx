import styled from "styled-components";
import { GetLists } from "./GetLists";

export default function MovieSection() {
  return (
    <>
      <MovieDiv>
        <MovieTitle>Coming out this December</MovieTitle>
        <CardDiv>
          <GetLists category="8228183"/>
        </CardDiv>
      </MovieDiv>
      <MovieDiv>
        <MovieTitle>Recommended Movies</MovieTitle>
        <CardDiv>
          <GetLists category="8227557" />
        </CardDiv>
      </MovieDiv>
      <MovieDiv>
        <MovieTitle>Underrated Movies</MovieTitle>
        <CardDiv>
          <GetLists category="8227655" />
        </CardDiv>
      </MovieDiv>
      <MovieDiv>
        <MovieTitle>Disturbing Movies</MovieTitle>
        <CardDiv>
          <GetLists category="8227656" />
        </CardDiv>
      </MovieDiv>
    </>
  );
}

const MovieDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-evenly;
  margin: 80px 10% 100px;
  text-align: center;

  @media (max-width: 1440px) {
    margin: 20px 10% 20px;
  }
`;

const MovieTitle = styled.h3`
  background: black;
  color: #278798;
  font-size: 50px;
`;

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  padding-top: 25px;

  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
`;
