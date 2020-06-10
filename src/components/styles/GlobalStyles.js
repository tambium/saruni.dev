import { injectGlobal } from 'emotion';

export const baseStyles = injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-display: swap;
  }
  ::-webkit-input-placeholder {
    /* Edge */
    color: #c2c2c2;
  }

  :-ms-input-placeholder {
    /* Internet Explorer */
    color: #c2c2c2;
  }

  ::placeholder {
    color: #c2c2c2;
  }
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Roboto Light', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    font-size: 16px;
    scroll-behavior: smooth;
  }

  a {
    transition: color 0.15s;
  }

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }


 
  




  .pre {
    font-size: 14px;
    margin: 0px;
    padding: 16px;
    overflow: auto;
  } 
`;
