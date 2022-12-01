import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --color-primary: #27AE60;
        --color-primary-50: #93d7AF;
        --color-secundary: #EB5757;
        --color-grey-100: #333333;
        --color-grey-50: #828282;
        --color-grey-20: #E0E0E0;
        --color-grey-0: #F5F5F5;
        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-success: #168821;
        --color-information: #155BCB;
        font-size: 60%;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html {
        width: 100vw;
        height: 100vh;
        justify-content: center;
    }

    body {
        background-color: aliceblue;
        font-size: 1.6rem;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Inter', sans-serif;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
        border: none;
    }





`
