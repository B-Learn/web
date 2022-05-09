import styled from "styled-components";

type Props = {
    width?: string
}

export const ContainerWrapper = styled.div<Props>`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: ${(props: Props) => props.width || 100}%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (min-width: 640px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`