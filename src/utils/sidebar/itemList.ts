import { ISidebarList } from "../../types";
import docsSidebar from "../../data/sidebar/docs-links.yaml";
import { getPathDetails } from "../path";

const createHash = (link) => {
  let index = -1;
  if (link) index = link.indexOf(`#`);
  return index >= 0 ? link.substr(index + 1) : false;
};

const extendItem = (items, parentTitle: string, depth?: number) => {
  items.forEach((item) => {
    item.hash = createHash(item.link);
    item.parentTitle = parentTitle;
    item.depth = depth || 1;

    if (item.items) extendItem(item.items, item.title, item.depth + 1);
  });
};

const extendItemList = (itemList) => {
  itemList.forEach((section) => {
    section.depth = 0;
    if (section.items) extendItem(section.items, section.title);
  });
  return itemList;
};

const extendSidebarData = (item) => {
  return {
    title: item[0].title,
    key: item[0].key,
    disableExpandAll: item[0].disableExpandAll,
    disableAccordions: item[0].disableAccordions,
    items: extendItemList(item[0].items),
  };
};

const itemListDocs = extendSidebarData(docsSidebar);

const itemListLookup = {
  docs: itemListDocs,
};

export const getItemList = (location: Location): ISidebarList => {
  const { basePath } = getPathDetails(location);
  const [urlSegment] = basePath.split(`/`).slice(1);

  return itemListLookup[urlSegment];
};
