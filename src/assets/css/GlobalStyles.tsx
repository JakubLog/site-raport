import { createGlobalStyle } from 'styled-components';
import { themeProps } from './theme';

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
        font-family: Arial, Helvetica, sans-serif;
    }
    body {
        margin: 20px;
        padding: 0;
        overflow-x: hidden;
        color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
        background-color: ${({ theme }: themeProps) => theme.colors.white};
    }
`;
