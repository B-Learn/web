import styled from "styled-components";

export const IndentWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: auto;
  border-top-style: solid;
  border-top-color: transparent;
  border-top-width: 2px;
  height: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 640px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`