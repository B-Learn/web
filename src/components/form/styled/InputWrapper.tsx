import styled from "styled-components";

export const InputWrapper = styled.div`
  box-sizing: border-box;
  margin: 0px 0px 1rem;
  min-width: 0px;
  flex: 1 1 auto;
  
  & + div {
    margin-left: 0px;

    @media screen and (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
  
  label {
    box-sizing: border-box;
    margin: 0px 0px 0.5rem;
    min-width: 0px;
    width: 100%;
    display: flex;
  }
  
  input {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: block;
    width: 100%;
    padding: 0.5rem;
    appearance: none;
    font-size: inherit;
    line-height: inherit;
    border-radius: 4px;
    font-family: 'Inter',sans-serif;
    border: none;
    background-color: #e2e8f0;
    color: #718096;
    outline: none;
  }
`