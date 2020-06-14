import React from "react";
import { useTheme } from "emotion-theming";

interface FourOhFourProps {}

const FourOhFour: React.FC<FourOhFourProps> = ({}) => {
  const theme = useTheme();

  return (
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
          borderRight: `1px solid ${theme.colors.surface}`,
          fontSize: theme.fonts.size.dek,
          fontWeight: 500,
          padding: "10px 24px 10px 0",
          marginRight: 24,
        }}
      >
        404
      </h4>
      <span>This page could not be found.</span>
    </div>
  );
};

export default FourOhFour;
