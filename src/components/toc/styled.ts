import styled from "@emotion/styled";

export const TOCWrapper = styled.div`
  display: block;
  height: calc(100vh - 48px);
  overflow-y: auto;
  position: sticky;
  top: 48px;
`;

export const TOCHeading = styled.h4`
  font-size: 13px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const TOCList = styled.ul`
  list-style: none;
`;
