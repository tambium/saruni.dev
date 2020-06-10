import facepaint from 'facepaint';

export const SIDEBAR_WIDTH = 225;
export const SIDEBAR_MIN_WIDTH = 250;

export const ASIDE_WIDTH = 250;
export const ASIDE_PADDING_LEFT = 50;

export const CONTENT_WIDTH = 1000;

/**
 * Breakpoint 1: Abitrary introduction of sidebar,
 * trusting the full width of sidebar can be accomodated.
 *
 * Breakpoint 2: Available once full width of sidebar,
 * content and aside can be accomodated.
 */
export const BREAKPOINTS = [
  `@media(min-width: ${SIDEBAR_MIN_WIDTH + 650}px)`,
  `@media(min-width: ${SIDEBAR_MIN_WIDTH + CONTENT_WIDTH}px)`,
];

export const mq = facepaint(BREAKPOINTS);
