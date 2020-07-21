import styled from "@emotion/styled";
import { colors, ThemeModes } from "@saruni-ui/theme";
import {
  ASIDE_PADDING_LEFT,
  ASIDE_WIDTH,
  CONTENT_WIDTH,
  mq,
  SIDEBAR_MIN_WIDTH,
  SIDEBAR_WIDTH,
  TOPBAR_HEIGHT,
  CONTENT_PADDING_VERTICAL,
} from "../../constants/layout";

export const LayoutContainer = styled.div(({ mode }: { mode: ThemeModes }) => {
  return mq({
    backgroundColor: colors.background[mode],
    display: "grid",
    gridTemplateColumns: [
      "1fr",
      `minmax(${SIDEBAR_MIN_WIDTH}px, calc((100% - ${
        CONTENT_WIDTH + SIDEBAR_WIDTH
      }px) / 2 + ${SIDEBAR_WIDTH}px)) 1fr`,
      `minmax(${SIDEBAR_MIN_WIDTH}px, calc((100% - ${
        CONTENT_WIDTH + SIDEBAR_WIDTH
      }px) / 2 + ${SIDEBAR_WIDTH}px)) ${CONTENT_WIDTH}px 1fr`,
    ],
    height: "100%",
    paddingTop: TOPBAR_HEIGHT,
    scrollMarginTop: TOPBAR_HEIGHT,
  });
});

export const ContentContainer = styled.main(
  ({ mode }: { mode: ThemeModes }) => {
    return mq({
      backgroundColor: colors.background[mode],
      display: "flex",
      paddingTop: [16 + TOPBAR_HEIGHT, CONTENT_PADDING_VERTICAL],
      paddingLeft: [16, 32, 64],
      paddingBottom: [16, 32],
      paddingRight: [16, 32, 0],
      minWidth: 0,
    });
  }
);

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
`;

export const AsideContainer = styled.aside(() => {
  return mq({
    display: ["none", "none", "flex"],
    flexShrink: 0,
    paddingLeft: ASIDE_PADDING_LEFT,
    width: ASIDE_WIDTH,
  });
});
