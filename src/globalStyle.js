import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body{
        background-color: #eee;
        padding:20px;
        font-family: 'Lato', sans-serif;
    }
`