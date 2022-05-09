import styled from 'styled-components'
import React from "react";

export const FooterWrapper = styled.footer`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: relative;
  background-color: #fff;
  margin-top: 4rem;

  @media screen and (min-width: 640px) {
    margin-top: 8rem;
  }
  
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

    @media screen and (min-width: 640px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    
    .content {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: center;
      padding-top: 4rem;
      padding-bottom: 4rem;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;

      @media screen and (min-width: 640px) {
        flex-direction: row;
        align-items: flex-start;
      }
      
      .footer_section {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }
    }
  }
`