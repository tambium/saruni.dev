import React from "react";
import { Link } from "gatsby";

import { hexToRgba, colors, useGlobalTheme } from "@saruni-ui/theme";

interface BrandingProps {}

export const Branding: React.FC<BrandingProps> = ({}) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});

  return (
    <React.Fragment>
      <Link
        to="/"
        css={{
          alignItems: "center",
          display: "flex",
          "&:hover": {
            textDecoration: "none",
          },
        }}
      >
        <div
          css={{
            background: `radial-gradient(
              ellipse at -15% 15%,
              #a4cdfe 0%,
              rgba(240, 172, 173, 0) 95%
            ),
            radial-gradient(ellipse at 95% 25%, #fbd786 0%, rgba(248, 174, 75, 0) 75%),
            radial-gradient(
              ellipse at 85% 100%,
              #fff8e8 -15%,
              rgba(219, 176, 72, 0) 50%
            ),
            radial-gradient(
              ellipse at 25% 95%,
              #db4b65 75%,
              rgba(194, 132, 233, 0) 100%
            )`,
            filter: `saturate(2)`,
            boxShadow: `rgba(0, 0, 0, 0) 0px 0px 0px 0px,
              ${hexToRgba(colors.borderSubdued[mode], 0.36)} 0px 0px 0px 3px,
              rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
              rgba(0, 0, 0, 0) 0px 0px 0px 0px,
              rgba(0, 0, 0, 0) 0px 0px 0px 0px`,
            borderRadius: "50%",
            height: 30,
            width: 30,
            marginRight: 12,
          }}
        />
        <span css={{ color: colors.text[mode], fontSize: 21, fontWeight: 600 }}>
          Saruni
        </span>
      </Link>
    </React.Fragment>
  );
};
