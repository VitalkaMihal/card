import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }

    .App {
        font-family: "Inter", sans-serif;
        display: flex;
        place-content: center;
        flex-wrap: wrap;
        gap: 20px;
    }
`