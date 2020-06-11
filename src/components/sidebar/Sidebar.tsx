import React from "react";
import { navigate } from "@reach/router";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import { useLocation } from "@reach/router";
import { useTheme as useEmotionTheme } from "emotion-theming";

import { useSidebar } from "../../hooks/use-sidebar";
import { useTheme } from "../../hooks/use-theme";
import { isExternalUrl } from "../../../utils/url";
import {
  TOPBAR_HEIGHT,
  mq,
  SIDEBAR_MOBILE_HEIGHT,
  ZINDEX,
} from "../../constants/layout";
import {
  SidebarList,
  SidebarListItem,
  StyledLink,
  SidebarContainer,
  SidebarWrapper,
  SidebarMobileSelect,
} from "./styled";
import { IconButton } from "../button";
import { Moon, Sun, ChevronDown } from "../icon/glyphs";

interface SidebarProps {}

const Link = ({ isActive, link, label }) => {
  const shared = { isActive };

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
  const selectRef = React.createRef<HTMLSelectElement>();
  const [value, setValue] = React.useState(null);

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

  React.useEffect(() => {
    if (selectRef.current) {
      setValue(selectRef.current);
    }
  }, [selectRef]);

  return (
    <React.Fragment>
      <div
        css={mq({
          alignItems: "center",
          backgroundColor: "#fff",
          borderBottom: "1px solid #e1e7ed",
          display: ["flex", "none"],
          height: SIDEBAR_MOBILE_HEIGHT,
          left: 0,
          position: "fixed",
          right: 0,
          top: 0,
          width: "100%",
          zIndex: ZINDEX.ZINDEX_SIDEBAR_MOBILE,
        })}
      >
        <div
          css={{
            display: "flex",
            alignItems: "center",
            flexGrow: 2,
            flexShrink: 0,
            flexBasis: "50vw",
            position: "relative",
          }}
        >
          <label
            css={{
              alignItems: "center",
              display: "flex",
              fontSize: theme.fonts.size.micro,
              fontWeight: 500,
              paddingLeft: 16,
              paddingRight: 16,
              textTransform: "uppercase",
              left: 0,
              position: "absolute",
            }}
          >
            <span>{value?.options[value?.selectedIndex].label}</span>
            <div
              css={{
                alignItems: "center",
                display: "inline-flex",
                marginLeft: 6,
              }}
            >
              <ChevronDown size={12} />
            </div>
          </label>
          <SidebarMobileSelect
            id="sidebar-mobile-select"
            defaultValue={pathname}
            onChange={(e) => navigate(e.target.value)}
            ref={selectRef}
          >
            {data.map(({ node: { label, link, items, id } }) => {
              if (Array.isArray(items)) {
                const subitems = items.map(({ label, link }) => {
                  return <option key={link} label={label} value={link} />;
                });
                return (
                  <optgroup key={link} label={label}>
                    {subitems}
                  </optgroup>
                );
              }
              return <option key={id} label={label} value={link} />;
            })}
          </SidebarMobileSelect>
        </div>
        <div />
      </div>
      <SidebarContainer>
        <SidebarWrapper>
          <div
            css={{
              alignItems: "center",
              display: "flex",
              height: TOPBAR_HEIGHT,
              justifyContent: "space-between",
              padding: "16px 16px 16px 8px",
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
                    <SidebarListItem
                      isActive={isActive}
                      depth={depth}
                      key={link}
                    >
                      <Link isActive={isActive} link={link} label={label} />
                    </SidebarListItem>
                  );
                });

                return <React.Fragment key={id}>{subitems}</React.Fragment>;
              }

              isActive = link === pathname;
              return (
                <SidebarListItem isActive={isActive} depth={depth} key={id}>
                  <Link isActive={isActive} link={link} label={label} />
                </SidebarListItem>
              );
            })}
          </SidebarList>
        </SidebarWrapper>
      </SidebarContainer>
    </React.Fragment>
  );
};
