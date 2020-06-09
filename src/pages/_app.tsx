import * as React from "react";
import { Reset } from "@saruni-ui/theme";

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Reset
        theme={() => ({
          backgroundColor: "#fff",
          customCss: `
          #__next {
            height: 100%;
          }
        `,
        })}
      />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
