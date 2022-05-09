import styled from "styled-components";

export const InlineWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: block;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`