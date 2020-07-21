import facepaint from "facepaint";

// mobile-only top bar
export const TOPBAR_HEIGHT = 60;

// non-mobile sidebar
export const SIDEBAR_WIDTH = 225;
export const SIDEBAR_MIN_WIDTH = 250;

// non-mobile aside (TOC)
export const ASIDE_WIDTH = 250;
export const ASIDE_PADDING_LEFT = 50;

// all device main content
export const CONTENT_WIDTH = 1000;
export const CONTENT_PADDING_VERTICAL = 40;

/*
 * Breakpoint 1: Arbitrary introduction of sidebar,
 * trusting the full width of sidebar can be accommodated.
 *
 * Breakpoint 2: Available once full width of sidebar,
 * content and aside can be accommodated.
 */
export const BREAKPOINTS = [
  `@media(min-width: ${SIDEBAR_MIN_WIDTH + 650}px)`,
  `@media(min-width: ${SIDEBAR_MIN_WIDTH + CONTENT_WIDTH}px)`,
];

export const ZINDEX = {
  ZINDEX_TOPBAR: 99,
  ZINDEX_TOPBAR_SELECT: 100,
};

export const mq = facepaint(BREAKPOINTS);
