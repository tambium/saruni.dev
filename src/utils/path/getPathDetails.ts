export const getPathDetails = (location: Location) => {
  /*
   * We could split version/language from `location.path` in the future
   * e.g. `/en-gb/1.x/docs/..` but for now expects `/docs`, etc.
   */
  return { basePath: location.pathname };
};
