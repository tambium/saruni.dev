export const isExternal = (url: string) => {
  return new RegExp("^((https?:)?//)", "i").test(url);
};
