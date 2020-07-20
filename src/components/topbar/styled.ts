import styled from "@emotion/styled";
import { colors, ThemeModes, font } from "@saruni-ui/theme";

import { mq, TOPBAR_HEIGHT, ZINDEX } from "../../constants/layout";

export const TopbarContainer = styled.div<{ mode: ThemeModes }>((props) =>
  mq({
    alignItems: "center",
    backgroundColor: colors.background[props.mode],
    borderBottom: `1px solid ${colors.borderSubdued[props.mode]}`,
    display: ["flex", "none"],
    height: TOPBAR_HEIGHT,
    left: 0,
    position: "fixed",
    right: 0,
    top: 0,
    width: "100%",
    zIndex: ZINDEX.ZINDEX_TOPBAR,
  })
);

export const TopbarLeftside = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 50vw;
  flex-grow: 2px;
  flex-shrink: 0px;
  position: relative;
`;

type TopbarSelectLabelProps = { mode: ThemeModes };

export const TopbarSelectLabel = styled.label`
  align-items: center;
  color: ${(p: TopbarSelectLabelProps) => colors.text[p.mode]};
  display: flex;
  font-size: ${font.size.caption}px;
  font-weight: 500px;
  padding-left: 16px;
  padding-right: 16px;
  text-transform: uppercase;
  left: 0px;
  position: absolute;
`;

export const TopbarSelectLabelIconWrapper = styled.span`
  align-items: center;
  display: inline-flex;
  margin-left: 6px;
`;

export const TopbarSelect = styled.select`
  appearance: none;
  background: transparent;
  border: none;
  color: hsla(0, 0%, 100%, 0);
  font-size: 13px;
  font-weight: 500;
  max-width: 100%;
  min-width: 100%;
  padding: 12px 16px;
  position: absolute;
  z-index: ${ZINDEX.ZINDEX_TOPBAR_SELECT};
  &:focus {
    outline: none;
  }
`;
