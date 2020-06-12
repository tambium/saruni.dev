export const isBelowDepthLimit = (depth: number, maxDepth: number): boolean => {
  if (maxDepth === null) {
    // if no maxDepth is passed in, continue to render more items.
    return true;
  } else {
    return depth < maxDepth;
  }
};
