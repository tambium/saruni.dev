import React from "react";
import { Link } from "gatsby";
import { TOCHeading, TOCList, TOCListItem, TOCWrapper } from "./styled";
import { useTheme } from "emotion-theming";
import { useActiveHash } from "../../hooks/use-active-hash";
import { ITOCItem } from "../../types";

interface TOCProps {
  location: Location;
  tableOfContents: {
    items: ITOCItem[];
  };
  tableOfContentsDepth: number;
}

const getHeadingIds = ({
  tableOfContents,
  traverseFullDepth = true,
  depth,
  recursionDepth = 1,
}) => {
  const idList = [];
  const hashToId = (str) => str.slice(1);

  if (tableOfContents) {
    for (const item of tableOfContents) {
      // Sometimes url does not exist on item. See #19851
      if (item.url) {
        idList.push(hashToId(item.url));
      }

      // Only traverse sub-items if specified (they are not displayed in ToC)
      // recursion depth should only go up to 6 headings deep and may come in as
      // undefined if not set in the tableOfContentsDepth frontmatter field
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

function isUnderDepthLimit(depth, maxDepth) {
  if (maxDepth === null) {
    // if no maxDepth is passed in, continue to render more items
    return true;
  } else {
    return depth < maxDepth;
  }
}

// depth and maxDepth are used to figure out how many bullets deep to render in the ToC sidebar, if no
// max depth is set via the tableOfContentsDepth field in the frontmatter, all headings will be rendered
function createItems({ items, location, minDepth, maxDepth, activeHash }) {
  return (
    items &&
    items.map((item, index) => {
      const isActive = item.url === `#${activeHash}`;
      return (
        <li
          data-testid={item.url || ``}
          key={location.pathname + (item.url || minDepth + `-` + index)}
        >
          {item.url && (
            <Link
              css={{
                color: isActive ? "red" : "green",
                border: 0,
                transition: `all 0.2s`,
                "&:hover": {
                  color: `link.color`,
                },
              }}
              to={location.pathname + item.url}
            >
              {item.title}
            </Link>
          )}
          {item.items && isUnderDepthLimit(minDepth, maxDepth) && (
            <ul sx={{ color: `textMuted`, listStyle: `none`, ml: 5 }}>
              {createItems({
                items: item.items,
                location,
                minDepth: minDepth + 1,
                maxDepth,
                activeHash,
              })}
            </ul>
          )}
        </li>
      );
    })
  );
}

export const TOC: React.FC<TOCProps> = ({
  location,
  tableOfContents: { items },
  tableOfContentsDepth,
}) => {
  const headingIds = getHeadingIds({
    tableOfContents: items,
    depth: tableOfContentsDepth,
  });

  const activeHash = useActiveHash(headingIds);
  const theme = useTheme();

  return (
    <TOCWrapper>
      <TOCHeading>On this page</TOCHeading>
      <TOCList>
        {createItems({
          activeHash,
          items,
          location,
          minDepth: 1,
          maxDepth: tableOfContentsDepth,
        })}
      </TOCList>
    </TOCWrapper>
  );
};
