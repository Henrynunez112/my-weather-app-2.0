import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.body};
    transition: all 0.25s linear;
}`