import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { colors, ThemeModes } from "@saruni-ui/theme";

import { hexToRGBA } from "../../utils/color";
import {
  mq,
  SIDEBAR_MIN_WIDTH,
  SIDEBAR_WIDTH,
  TOPBAR_HEIGHT,
  CONTENT_PADDING_VERTICAL,
} from "../../constants/layout";

export const SidebarContainer = styled.div(({ mode }: { mode: ThemeModes }) => {
  return mq({
    backgroundColor: colors.surface[mode],
    borderRight: `1px solid ${colors.borderSubdued[mode]}`,
    display: ["none", "flex"],
    alignItems: "flex-end",
    flexDirection: "column",
    flexGrow: 1,
    minWidth: SIDEBAR_MIN_WIDTH,
    width: "100%",
  });
});

export const SidebarWrapper = styled.div((props) =>
  mq({
    display: "flex",
    flexDirection: "column",
    height: [null, "100vh"],
    position: "fixed",
    overflowY: "scroll",
    width: SIDEBAR_WIDTH,
    paddingTop: CONTENT_PADDING_VERTICAL,
  })
);

export const SidebarList = styled.ul`
  flex: 1;
  list-style: none;
  padding-top: 8;
`;

interface SidebarListItemProps {
  isActive: boolean;
}

export const SidebarListItem = styled.li<SidebarListItemProps>`
  ${(p) =>
    p.isActive && `background-color: ${hexToRGBA(p.theme.colors.brand, 0.1)}`};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  list-style-type: none;
  padding-left: ${(p) => p.depth * 8}px;
  width: auto;
`;

interface StyledLinkProps {
  as: React.ElementType;
  depth: number;
  isActive: boolean;
  href?: string;
  to?: string;
}

export const StyledLink = styled("a", {
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  align-items: center;
  color: ${(p: StyledLinkProps) =>
    p.isActive ? p.theme.colors.brand : p.theme.colors.textSubtle};
  display: flex;
  font-size: 14px;
  font-weight: 500px;
  justify-content: space-between;
  padding: 8px 16px 8px ${(p) => 12 + p.depth * 8}px;
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover {
    ${(p: StyledLinkProps) => !p.isActive && `color: ${p.theme.colors.text}`}
  }
`;
