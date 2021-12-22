// src/assets/styles/global-styles.ts
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    background-color: #e9ecf1;

  }

  * {
    box-sizing: border-box;
  }
  li, ol, ul {
    list-style: none;
    margin: 0;
    
  }

  
`;

export default GlobalStyle;
