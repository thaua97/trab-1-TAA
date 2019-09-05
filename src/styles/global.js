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

    body {
        width: 100%;
        height: 100%;
        background: #bea2e7;
        background: linear-gradient(145deg, #bea2e7 0%, #86b7e7 100%) center 100% no-repeat;
        background: -moz-linear-gradient(145deg, #bea2e7 0%, #86b7e7 100%) center 100% no-repeat ;
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
