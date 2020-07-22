import React from "react";
import { useGlobalTheme, colors, font } from "@saruni-ui/theme";

import { SEO } from "../components/seo";

interface FourOhFourProps {}

const FourOhFour: React.FC<FourOhFourProps> = ({}) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});

  return (
    <React.Fragment>
      <SEO title="Page not found" />
      <div
        css={{
          alignItems: "center",
          display: "flex",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <h4
          css={{
            borderRight: `1px solid ${colors.borderSubdued[mode]}`,
            fontSize: font.size.subheading,
            fontWeight: 500,
            padding: "10px 24px 10px 0",
            marginRight: 24,
          }}
        >
          404
        </h4>
        <span>This page could not be found.</span>
      </div>
    </React.Fragment>
  );
};

export default FourOhFour;
