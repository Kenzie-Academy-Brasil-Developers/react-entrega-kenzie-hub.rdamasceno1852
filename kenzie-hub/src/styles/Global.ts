import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 
 :root{
    --color-primary: 255, 87, 127;
    --color-primary-focus: 255,66,127;
    --color-primary-negative:89,50,63;
    --color-black-30: 255,255,255,30;
    --white: #FFF;
    --overlay: 0,0,0;
    --grey-0: 248,249,250;
    --grey-1: 134,142,150;
    --grey-2: 52,59,65;
    --grey-3: 33,37,41;
    --grey-4: 18,18,20;
    --sucess: 63,232,100;
    --negative:232,63,91;

    --title1: 18px;
    --title2: 16px;
    --title3: 14px;
    --headline: 12px;
    --headlineItalic: 12px;
    --label-mobile: 12px;
    --bold: 700;
    --medium: 500;
    --regular: 400;
    --helper: 10px
 }

 * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  
  body,html{
    width: 100vw;
    height: 100vh;
    background-color: rgba(var(--grey-4),1);
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
 
  img{
    max-width: 100%;
  }
  button {
    cursor: pointer;
  }
`