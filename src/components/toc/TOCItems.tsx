import React from "react";
import { Link } from "gatsby";

import { isBelowDepthLimit } from "./utils";
import { ITOCItem } from "../../types";

interface TOCItemsProps {
  activeHash: string;
  items: ITOCItem[];
  location: Location;
  minDepth: number;
  maxDepth: number;
}

export const TOCItems: React.FC<TOCItemsProps> = ({
  activeHash,
  items,
  location,
  minDepth,
  maxDepth,
}) => {
  return (
    <React.Fragment>
      {items &&
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
              {item.items && isBelowDepthLimit(minDepth, maxDepth) && (
                <ul sx={{ color: `textMuted`, listStyle: `none`, ml: 5 }}>
                  <TOCItems
                    items={item.items}
                    location={location}
                    minDepth={minDepth + 1}
                    maxDepth={maxDepth}
                    activeHash={activeHash}
                  />
                </ul>
              )}
            </li>
          );
        })}
    </React.Fragment>
  );
};
