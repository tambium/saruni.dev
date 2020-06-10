import facepaint from 'facepaint';

export const SIDEBAR_WIDTH = 225;
export const SIDEBAR_MIN_WIDTH = 250;

export const ASIDE_WIDTH = 250;
export const ASIDE_PADDING_LEFT = 50;

export const CONTENT_WIDTH = 1100;

export const BREAKPOINTS = [`@media(min-width: 968px)`, `@media(min-width: 1200px)`];

export const mq = facepaint(BREAKPOINTS);
