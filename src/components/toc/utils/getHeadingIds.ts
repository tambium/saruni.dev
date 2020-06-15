import { ITOCItem } from "../../../types";

interface Params {
  tableOfContents: ITOCItem[];
  traverseFullDepth?: boolean;
  depth: number;
  recursionDepth?: number;
}

export const getHeadingIds = ({
  tableOfContents,
  traverseFullDepth = true,
  depth,
  recursionDepth = 1,
}: Params) => {
  const idList = [];
  const hashToId = (str: string) => str.slice(1);

  if (tableOfContents) {
    for (const item of tableOfContents) {
      // URL may not exist on item.
      if (item.url) {
        idList.push(hashToId(item.url));
      }

      /*
       * We should only traverse sub-items if specified in frontmatter
       * through `tableOfContentsDepth` field.
       */
      if (item.items && traverseFullDepth && recursionDepth < (depth || 6)) {
        idList.push(
          ...getHeadingIds({
            tableOfContents: item.items,
            depth,
            recursionDepth: recursionDepth + 1,
          })
        );
      }
    }
  }

  return idList;
};
