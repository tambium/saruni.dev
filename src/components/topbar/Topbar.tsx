import React from "react";
import { colors, useGlobalTheme } from "@saruni-ui/theme";
import { Link } from "gatsby";

import { TOPBAR_HEIGHT, ZINDEX, mq } from "../../constants/layout";
import { useTheme } from "../../hooks/use-theme";
import { IconButton } from "../button";
import { Moon, Sun } from "../icon/glyphs";
import { Branding } from "./Branding";
import { MobileSelect } from "./MobileSelect";

interface TopbarProps {
  isContentLayout?: boolean;
  location: Location;
  maxWidth: number;
  section?: string;
}

export const Topbar: React.FC<TopbarProps> = ({
  isContentLayout = false,
  location,
  maxWidth,
}) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});

  const { isLight, switchMode } = useTheme();

  return (
    <div
      css={{
        zIndex: ZINDEX.ZINDEX_TOPBAR,
        ...(isContentLayout && {
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
          padding: "0 16px",
          position: "relative",
        }}
      >
        <div
          css={mq({
            ...(isContentLayout && {
              display: ["none", "flex"],
            }),
          })}
        >
          <Branding />
        </div>
        {isContentLayout && location && (
          <div
            css={mq({
              display: ["inline-flex", "none"],
              height: TOPBAR_HEIGHT,
              position: "relative",
            })}
          >
            <MobileSelect location={location} />
          </div>
        )}
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
