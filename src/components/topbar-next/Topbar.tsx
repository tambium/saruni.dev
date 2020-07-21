import React from "react";
import { colors, useGlobalTheme } from "@saruni-ui/theme";
import { Link } from "gatsby";

import { TOPBAR_HEIGHT, ZINDEX } from "../../constants/layout";
import { useTheme } from "../../hooks/use-theme";
import { IconButton } from "../button";
import { Moon, Sun } from "../icon/glyphs";
import { hexToRGBA } from "../../utils/color";

interface TopbarProps {
  isFixed?: boolean;
  maxWidth: number;
  section?: string;
}

export const Topbar: React.FC<TopbarProps> = ({
  isFixed = false,
  maxWidth,
  section,
}) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});
  const { isLight, switchMode } = useTheme();

  return (
    <div
      css={{
        zIndex: ZINDEX.ZINDEX_TOPBAR,
        ...(isFixed && {
          backgroundColor: colors.surface[mode],
          borderBottom: `1px solid ${colors.borderSubdued[mode]}`,
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
        }),
      }}
    >
      <div
        css={{
          alignItems: "center",
          display: "flex",
          height: `${TOPBAR_HEIGHT}px`,
          justifyContent: "space-between",
          margin: "0 auto",
          maxWidth,
          padding: "0 12px",
          position: "relative",
        }}
      >
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
              ${hexToRGBA(colors.borderSubdued[mode], 0.36)} 0px 0px 0px 3px,
              rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
              rgba(0, 0, 0, 0) 0px 0px 0px 0px,
              rgba(0, 0, 0, 0) 0px 0px 0px 0px`,
              borderRadius: "50%",
              height: 30,
              width: 30,
              marginRight: 12,
            }}
          />
          <span
            css={{ color: colors.text[mode], fontSize: 21, fontWeight: 600 }}
          >
            Saruni
          </span>
        </Link>
        <div
          css={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Link
            css={{
              color: colors.text[mode],
              fontWeight: 500,
              marginRight: 16,
            }}
            to="/docs/overview"
          >
            Docs
          </Link>
          <Link
            css={{
              color: colors.text[mode],
              fontWeight: 500,
              marginRight: 16,
            }}
            to="/guides/cors"
          >
            Guides
          </Link>
          <a
            css={{
              color: colors.text[mode],
              fontWeight: 500,
              marginRight: 16,
            }}
            href="https://github.com/tambium/saruni"
          >
            GitHub
          </a>
          <IconButton
            ariaLabel="Toggle theme"
            backgroundColor={colors.surfaceNeutralSubdued[mode]}
            color={colors.text[mode]}
            icon={isLight ? <Moon size={14} /> : <Sun size={14} />}
            onClick={switchMode}
          />
        </div>
      </div>
    </div>
  );
};
