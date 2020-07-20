import React from "react";
import { colors, hexToRgba, useGlobalTheme } from "@saruni-ui/theme";
import { Link } from "gatsby";

import { TOPBAR_HEIGHT, ZINDEX } from "../../constants/layout";
import { useTheme } from "../../hooks/use-theme";
import { IconButton } from "../button";
import { Moon, Sun } from "../icon/glyphs";

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
        alignItems: "center",
        display: "flex",
        height: `${TOPBAR_HEIGHT}px`,
        justifyContent: "space-between",
        margin: "0 auto",
        maxWidth,
        padding: "0 12px",
        position: "relative",
        zIndex: ZINDEX.ZINDEX_TOPBAR,
        ...(isFixed && {
          backgroundColor: colors.background[mode],
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
        }),
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
        <span css={{ color: colors.text[mode], fontSize: 21, fontWeight: 600 }}>
          Saruni
        </span>
        {section && (
          <div
            css={{
              color: "pink",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 1,
              paddingLeft: 6,
              textTransform: "uppercase",
            }}
          >
            {section}
          </div>
        )}
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
          backgroundColor={hexToRgba(colors.surface[mode], 0.33)}
          color={colors.text[mode]}
          icon={isLight ? <Moon size={14} /> : <Sun size={14} />}
          onClick={switchMode}
        />
      </div>
    </div>
  );
};
