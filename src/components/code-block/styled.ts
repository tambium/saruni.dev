import styled from "@emotion/styled";
import { css } from "@emotion/core";
import {
  LiveError as AuxLiveError,
  LivePreview as AuxLivePreview,
} from "react-live";

export const Pre = styled.pre`
  border-radius: ${({ hasTitle }) => (hasTitle ? "0 0 3px 3px" : "3px")};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  margin: 0 0 16px 0;
  overflow: auto;
  padding: 2rem 1rem 1rem 1rem;
  text-align: left;
  word-wrap: normal;
  webkit-overflow-scrolling: touch;
  & .token-line {
    font-size: 15px;
    height: 1.3rem;
    line-height: 1.3rem;
  }
`;

export const LiveWrapper = styled.div`
  align-items: stretch;
  border-radius: 3px;
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  margin-bottom: 32px;
  overflow: hidden;
`;

export const StyledEditor = styled.div`
  font-size: 16px;
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
  border-radius: 3px;
  color: rgb(248, 248, 242);
  display: block;
  font-size: 15px;
  margin-bottom: 32px;
  padding: 0.5rem;
  text-align: left;
  white-space: pre-wrap;
`;

export const PreHeader = styled.div`
  background-color: #282a36;
  border-radius: 3px 3px 0 0;
  color: rgba(248, 248, 242, 0.75);
  font-size: 0.75rem;
  margin-top: 0.5rem;
  padding: 0.8rem 1rem;
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
  position: absolute;
  right: 0.75rem;
  top: 0.25rem;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
      rgba(71, 63, 79, 0.08) 0px 2px 4px;
    opacity: 0.8;
  }
`;
