import styled from "styled-components";

export const HeaderWrapper = styled.header`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: relative;
  background-color: #fff;

  .wrap {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
    z-index: 10;
    background-color: #fff;
  }

  .content {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;

    @media screen and (min-width: 640px) {
      height: 7rem;
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }

  .logo {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    flex-basis: 100%;

    a {
      color: #718096;
      text-decoration: none;

      &:hover {
        color: #8090ac;
      }
    }

    @media screen and (min-width: 768px) {
      flex-basis: 33.333333%;
    }
  }

  .search {
    box-sizing: border-box;
    margin: 0;
    min-width: auto;
    flex-basis: auto;
    order: 3;
    margin-left: 1rem;
    margin-right: 1rem;

    @media screen and (min-width: 768px) {
      flex-basis: 33.333333%;
      order: unset;
    }

    .search_content {
      box-sizing: border-box;
      margin: 0;
      flex-basis: auto;
      min-width: auto;
      -ms-flex-order: 3;
      order: 3;
      margin-left: 1rem;
      margin-right: 1rem;

      @media screen and (min-width: 768px) {
        flex-basis: 33.333333%;
        order: unset;
      }

      .search_input_wrap {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: none;
        align-items: center;
        background-color: #e2e8f0;
        border-radius: 0.5rem;
        position: static;
        top: 2rem;
        left: 50%;
        transform: translate(0, 0);
        z-index: 99;
        width: auto;
        max-width: none;
        border-style: solid;
        border-color: #fff;
        border-width: 3px;
        padding-left: 1rem;
        padding-right: 1rem;
        color: #718096;

        @media screen and (min-width: 768px) {
          display: flex;
        }

        svg {
          flex-shrink: 0;

          &:hover {
            cursor: pointer;
          }
        }

        input {
          box-sizing: border-box;
          margin: 0px 0px 0px 0.25rem;
          min-width: 0px;
          display: block;
          width: 100%;
          padding: 0.5rem;
          appearance: none;
          font-size: inherit;
          line-height: inherit;
          border-radius: 4px;
          font-family: Inter, sans-serif;
          border: none;
          background-color: #e2e8f0;
          color: #718096;
          outline: none;
        }
      }
    }
  }

  .menu {
    box-sizing: border-box;
    margin: 0;
    min-width: auto;
    flex-basis: auto;
    order: 4;

    @media screen and (min-width: 768px) {
      flex-basis: 33.333333%;
      order: unset;
    }

    .menu_content {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      display: none;

      @media screen and (min-width: 768px) {
        display: block;
      }

      .links {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        flex-direction: row;
        justify-content: flex-end;
        flex-wrap: wrap;
        display: flex;

        a {
          box-sizing: border-box;
          margin: 0;
          min-width: 0;
          text-decoration: none;
          font-weight: 700;
          display: inline-block;
          color: #718096;
          user-select: none;
          padding: 0.25rem;
          margin: 0;
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }
      }
    }
  }
`