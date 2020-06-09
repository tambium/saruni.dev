import { ParsedUrlQuery } from "querystring";

export const getSlug = ({ slug }: ParsedUrlQuery) => {
  let coerced: string[];
  if (typeof slug === "string") {
    coerced = [slug];
  } else coerced = slug;

  return { slug: `/docs/${coerced.join("/")}` };
};

export const removeFromLast = (path: string, key: string) => {
  const i = path.lastIndexOf(key);
  return i === -1 ? path : path.substring(0, i);
};
