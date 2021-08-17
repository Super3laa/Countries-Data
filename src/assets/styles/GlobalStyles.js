import  styled, { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
   body {
     background: ${({ theme }) => theme.Background};
     color: ${({ theme }) => theme.Text};
     transition: all 0.2s linear; 
  }
`

export const ElementStyle= styled.div`
  background : ${({theme})=>theme.ElementBackground};
  box-shadow: ${({theme})=>theme.boxShadow};
  color : ${({theme})=>theme.Text};
  width: auto;
    height: fit-content;
    border-radius: 4px !important;

    `
export const InputStyle= styled.div`
  color : ${({theme})=>theme.InputBackground};
  background : ${({theme})=>theme.ElementBackground};
  box-shadow: ${({theme})=>theme.boxShadow};
    border-radius: 4px !important;
    width: fit-content;


`