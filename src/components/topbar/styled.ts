import styled from "@emotion/styled";
import { colors, ThemeModes } from "@saruni-ui/theme";

import { ZINDEX } from "../../constants/layout";

type TopbarSelectLabelProps = { mode: ThemeModes };

export const TopbarSelectLabel = styled.label`
  align-items: center;
  color: ${(p: TopbarSelectLabelProps) => colors.text[p.mode]};
  display: flex;
  font-weight: 500;
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
  bottom: 0;
  color: hsla(0, 0%, 100%, 0);
  font-size: 13px;
  font-weight: 500;
  max-width: 100%;
  padding: 16px;
  position: absolute;
  top: 0;
  z-index: ${ZINDEX.ZINDEX_TOPBAR_SELECT};
  &:focus {
    outline: none;
  }
`;
