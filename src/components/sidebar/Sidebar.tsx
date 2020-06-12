import React from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import { useLocation } from "@reach/router";
import { useTheme as useEmotionTheme } from "emotion-theming";

import { useSidebar } from "../../hooks/use-sidebar";
import { useTheme } from "../../hooks/use-theme";
import { isExternalUrl } from "../../../utils/url";
import { TOPBAR_HEIGHT } from "../../constants/layout";
import {
  SidebarList,
  SidebarListItem,
  StyledLink,
  SidebarContainer,
  SidebarWrapper,
} from "./styled";
import { IconButton } from "../button";
import { Moon, Sun } from "../icon/glyphs";

interface SidebarProps {}

const Link = ({ isActive, depth, link, label }) => {
  const shared = { depth, isActive };

  if (isExternalUrl(link)) {
    return (
      <StyledLink as="a" {...shared}>
        {label}
      </StyledLink>
    );
  }

  return (
    <StyledLink as={GatsbyLink} to={link} {...shared}>
      {label}
    </StyledLink>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  const {
    site: {
      siteMetadata: { footer, basePath },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          footer
          basePath
        }
      }
    }
  `);

  const data = useSidebar();
  const { pathname } = useLocation();
  const { isLight, switchTheme } = useTheme();
  const theme = useEmotionTheme();

  return (
    <SidebarContainer>
      <SidebarWrapper>
        <div
          css={{
            alignItems: "center",
            display: "flex",
            height: TOPBAR_HEIGHT,
            justifyContent: "space-between",
            padding: "16px 16px 16px 12px",
          }}
        >
          <div>
            <span css={{ fontSize: 21, fontWeight: 700 }}>Saruni</span>
            <span
              css={(theme) => {
                return {
                  color: theme.colors.brand,
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  paddingLeft: 6,
                };
              }}
            >
              Docs
            </span>
          </div>
          <IconButton
            ariaLabel="Toggle theme"
            backgroundColor={theme.colors.surface}
            color={theme.colors.text}
            icon={isLight ? <Moon size={14} /> : <Sun size={14} />}
            onClick={switchTheme}
          />
        </div>
        <SidebarList>
          {data.map(({ node: { label, link, items, id } }) => {
            let depth = 0;
            let isActive: boolean;

            if (Array.isArray(items)) {
              depth += 1;
              const subitems = items.map(({ label, link }) => {
                isActive = link === pathname;

                return (
                  <SidebarListItem isActive={isActive} key={link}>
                    <Link
                      isActive={isActive}
                      depth={depth}
                      link={link}
                      label={label}
                    />
                  </SidebarListItem>
                );
              });

              return <React.Fragment key={id}>{subitems}</React.Fragment>;
            }

            isActive = link === pathname;
            return (
              <SidebarListItem isActive={isActive} key={id}>
                <Link
                  isActive={isActive}
                  depth={depth}
                  link={link}
                  label={label}
                />
              </SidebarListItem>
            );
          })}
        </SidebarList>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
