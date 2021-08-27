import { createGlobalStyle } from 'styled-components';
import { themeProps } from './theme';

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
        font-family: Roboto, Helvetica, sans-serif;
        ::-webkit-scrollbar {
            width: 10px;
            background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 5px;
            background-color: ${({ theme }: themeProps) => theme.colors.purpleLight}
        }
    }
    body {
        margin: 20px;
        padding: 0;
        overflow-x: hidden;
        color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
        background-color: ${({ theme }: themeProps) => theme.colors.white};
    }
`;
