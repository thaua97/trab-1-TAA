import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
        background: #bea2e7;
        background: -moz-linear-gradient(top, #bea2e7 0%, #86b7e7 100%);
        background: -webkit-linear-gradient(top, #bea2e7 0%, #86b7e7 100%);
        background: linear-gradient(to bottom, #bea2e7 0%, #86b7e7 100%);
        background-repeat: no-repeat;
    }

    body {
        top: 0;
        bottom: 0;
        -webkit-font-smoothing: antialiased;
        
        
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;
