/**
 * Build will fail and complain about usage of emotion-theming
 * unless we replicate gatsby-browser in gatsby-ssr, too.
 * More details: https://github.com/gatsbyjs/gatsby/issues/11494
 */
export { wrapRootElement } from "./gatsby-browser";
