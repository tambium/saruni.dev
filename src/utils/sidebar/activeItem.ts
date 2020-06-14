import { getPathDetails } from "../path";

const isItemActive = (location: Location, item) => {
  const { basePath } = getPathDetails(location);

  const linkMatchesPathname = item.link === basePath;

  const linkWithoutHashMatchesPathname =
    item.link.replace(/#.*/, ``) === basePath;

  if (linkMatchesPathname || linkWithoutHashMatchesPathname) {
    return item;
  }

  return false;
};

export const getActiveItem = (itemList, location: Location) => {
  for (let item of itemList) {
    if (item.link) {
      if (isItemActive(location, item)) return item;
    }

    if (item.items) {
      let activeSubItem = getActiveItem(item.items, location);
      if (activeSubItem) return activeSubItem;
    }
  }

  return false;
};
