import styled from "styled-components";

export const TitleWrapper = styled.h2`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-family: 'Inter',sans-serif;
  font-weight: bold;
  line-height: 1.33;
  display: block;
  color: #2d3748;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.5rem;
  position: relative;
  padding-left: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;

  @media screen and (min-width: 640px) {
    padding-left: 2rem;
    margin-left: 0;
    margin-right: 0;
  }
  
  &:before {
    display: none;
    background-color: #e2e8f0;
    content: "";
    border-radius: 9999px;
    position: absolute;
    height: 100%;
    width: 5px;
    top: 0;
    left: 0;

    @media screen and (min-width: 640px) {
      display: block;
    }
  }
`