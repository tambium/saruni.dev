import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { hexToRGBA } from "../../utils/color";
import { mq, SIDEBAR_MIN_WIDTH, SIDEBAR_WIDTH } from "../../constants/layout";

export const SidebarContainer = styled.div`
  ${mq({
    borderRight: "1px solid #e1e7ed",
    display: ["none", "flex"],
    alignItems: "flex-end",
    flexDirection: "column",
    flexGrow: 1,
    minWidth: SIDEBAR_MIN_WIDTH,
    width: "100%",
  })};
`;

export const SidebarWrapper = styled.div`
  ${mq({
    display: "flex",
    flexDirection: "column",
    height: [null, "100vh"],
    position: "sticky",
    top: 0,
    width: SIDEBAR_WIDTH,
  })};
`;

export const SidebarList = styled.ul`
  flex: 1;
  list-style: none;
  padding-top: 8;
`;

interface SidebarListItemProps {
  depth: number;
  isActive: boolean;
}

export const SidebarListItem = styled.li<SidebarListItemProps>`
  ${(p) =>
    p.isActive && `background-color: ${hexToRGBA(p.theme.colors.brand, 0.1)}`};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  list-style-type: none;
  padding-left: ${(p) => p.depth * 16}px;
  width: auto;
`;

interface StyledLinkProps {
  as: React.ElementType;
  isActive: boolean;
  href?: string;
  to?: string;
}

export const StyledLink = styled("a", {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "isActive",
})`
  align-items: center;
  color: ${(p: StyledLinkProps) =>
    p.isActive ? p.theme.colors.brand : p.theme.colors.text};
  display: flex;
  font-size: 14px;
  font-weight: 500px;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 25px;
  padding: 8px 8px 8px 16px;
  text-decoration: none;
`;

export const SidebarMobileSelect = styled.select`
  appearance: none;
  background: transparent;
  border: none;
  color: hsla(0, 0%, 100%, 0);
  font-size: 13px;
  font-weight: 500;
  max-width: 100%;
  padding: 12px 16px;
  position: absolute;
  z-index: 100;
  &:focus {
    outline: none;
  }
`;
