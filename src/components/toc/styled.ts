import styled from "@emotion/styled";
import { font } from "@saruni-ui/theme";

import { TOPBAR_HEIGHT } from "../../constants/layout";

export const TOCWrapper = styled.div`
  display: block;
  height: calc(100vh - 48px);
  overflow-y: auto;
  position: fixed;
  top: ${TOPBAR_HEIGHT} + 60px;
`;

export const TOCHeading = styled.h4`
  font-size: ${font.size.caption}px;
  font-weight: 600;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const TOCList = styled.ul`
  list-style: none;
`;
