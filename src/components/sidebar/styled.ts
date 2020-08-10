import styled from "@emotion/styled";
import { colors, ThemeModes } from "@saruni-ui/theme";

import {
  mq,
  SIDEBAR_MIN_WIDTH,
  SIDEBAR_WIDTH,
  CONTENT_PADDING_VERTICAL,
  TOPBAR_HEIGHT,
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
    height: [null, `calc(100vh - ${TOPBAR_HEIGHT}px)`],
    position: "fixed",
    overflowY: "scroll",
    width: SIDEBAR_WIDTH,
    paddingTop: CONTENT_PADDING_VERTICAL,
    paddingBottom: CONTENT_PADDING_VERTICAL,
  })
);

export const SidebarList = styled.ul`
  flex: 1;
  list-style: none;
  padding-top: 8;
`;
