import styled from "@emotion/styled";
import { font, colors, ThemeModes } from "@saruni-ui/theme";

import {
  LiveError as AuxLiveError,
  LivePreview as AuxLivePreview,
} from "react-live";

export const Pre = styled.pre`
  border-radius: 0 0 4px 4px;
  overflow: auto;
  padding: 16px;
  text-align: left;
  word-wrap: normal;
  webkit-overflow-scrolling: touch;
  & .token-line {
    height: 1.3rem;
    line-height: 1.3rem;
  }
`;

export const LiveWrapper = styled.div`
  align-items: stretch;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  overflow: hidden;
`;

export const StyledEditor = styled.div`
  line-height: 1.3rem;
  height: 350px;
  max-height: 350px;
  overflow: auto;
  > div {
    height: 100%;
  }
  * > textarea:focus {
    outline: none;
  }
  .token {
    font-style: normal !important;
  }
`;

export const LivePreview = styled(AuxLivePreview)`
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
`;

export const LiveError = styled(AuxLiveError)`
  background: rgb(255, 85, 85);
  border-radius: 4px;
  color: rgb(248, 248, 242);
  display: block;
  padding: 0.5rem;
  text-align: left;
  white-space: pre-wrap;
`;

export const PreHeader = styled("div")(
  {
    alignItems: "center",
    borderRadius: "4px 4px 0 0",
    display: "flex",
    fontSize: `${font.size.body}px`,
    justifyContent: "space-between",
    padding: "10px 16px",
  },
  ({ mode }: { mode: ThemeModes }) => ({
    backgroundColor: `${colors.surfaceNeutralSubdued["dark"]}`,
    color: `${colors.text["dark"]}`,
  })
);

export const LineNumber = styled.span`
  display: inline-block;
  opacity: 0.3;
  user-select: none;
  width: 2rem;
`;
