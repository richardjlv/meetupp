import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import { darken } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body, html, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', Helvetica, sans-serif;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  button {
    font-size: 16px;
    padding: 10px 20px;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f94d6a;
    transition: background 0.2s;

    svg {
      margin-right: 10px;
    }

    &:hover {
      background: ${darken(0.07, '#f94d6a')};
    }
  }

  input {
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    border: 0;
    border-radius: 4px;
    height: 50px;
    margin: 5px auto;
    padding: 0 15px;
    color: rgba(255, 255, 255, 0.7);

    &::placeholder {
      font-size: 16px;
    }
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
