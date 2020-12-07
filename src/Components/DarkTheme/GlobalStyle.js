import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body{
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
    border: 1px solid ${({theme}) => theme.border} !important;
    height: 100vh;
    transition: all 0.25s linear;
}`