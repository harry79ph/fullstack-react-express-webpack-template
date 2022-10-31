import { createGlobalStyle } from "styled-components";

export const AppReset = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: Arial, Helvetica, sans-serif;
    }
    html, body {
        height: 100%;
        line-height: 1.2;
        font-size: 100%;
        -webkit-text-size-adjust: 100%;
        font: inherit;
    }
    ol, ul, li {
        list-style: none;
    }
`;
