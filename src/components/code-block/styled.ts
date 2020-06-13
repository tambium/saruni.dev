import styled from "@emotion/styled";
import {
  LiveError as AuxLiveError,
  LivePreview as AuxLivePreview,
} from "react-live";
import { darkTheme } from "../../theme";

export const Pre = styled.pre`
  border-radius: 0 0 4px 4px;
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  margin: 0 0 16px 0;
  overflow: auto;
  padding: 12px;
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
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  margin-bottom: 32px;
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
  margin-bottom: 32px;
  padding: 0.5rem;
  text-align: left;
  white-space: pre-wrap;
`;

export const PreHeader = styled.div`
  align-items: center;
  background-color: ${darkTheme.colors.surfaceSubdued};
  border-radius: 4px 4px 0 0;
  color: ${darkTheme.colors.textSubtle};
  display: flex;
  font-size: ${(p) => p.theme.fonts.size.micro}px;
  justify-content: space-between;
  padding: 8px 12px;
`;

export const LineNumber = styled.span`
  display: inline-block;
  opacity: 0.3;
  user-select: none;
  width: 2rem;
`;

export const CopyCode = styled.button`
  background: none;
  border-radius: 4px;
  border: 0;
  border: none;
  color: rgb(248, 248, 242);
  cursor: pointer;
  margin: 0.25em;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
      rgba(71, 63, 79, 0.08) 0px 2px 4px;
    opacity: 0.8;
  }
`;
