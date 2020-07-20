import styled from "@emotion/styled";
import { ThemeModes } from "@saruni-ui/theme";

export const Backdrop = styled.div`
  border: none;
  bottom: 0;
  height: 500px;
  min-width: 1000px;
  overflow: hidden;
  position: absolute;
  top: -80px;
  width: 100%;
  &:after {
    background: radial-gradient(
        ellipse at 5% 5%,
        #a4cdfe 0%,
        rgba(240, 172, 173, 0) 75%
      ),
      radial-gradient(ellipse at 95% 5%, #e7af33 0%, rgba(248, 174, 75, 0) 75%),
      radial-gradient(
        ellipse at 95% 95%,
        #fff8e8 -15%,
        rgba(219, 176, 72, 0) 75%
      ),
      radial-gradient(
        ellipse at 5% 95%,
        #cc2a48 50%,
        rgba(194, 132, 233, 0) 100%
      );
    content: "";
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    filter: saturate(
      ${(p: { mode: ThemeModes }) => (p.mode === "dark" ? 1.5 : 1.3)}
    );
    ${(p: { mode: ThemeModes }) =>
      p.mode === "dark" ? `opacity: 0.8;` : null};
  }
`;
