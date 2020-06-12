import React from "react";
import { Link } from "gatsby";
import { useTheme } from "emotion-theming";

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
  const theme = useTheme();

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
                    color: isActive
                      ? theme.colors.brand
                      : theme.colors.textSubtle,
                    border: 0,
                    fontSize: theme.fonts.size.small,
                    transition: `color 0.2s ease`,
                    textDecoration: "none",
                    "&:hover": {
                      color: theme.colors.text,
                    },
                  }}
                  to={location.pathname + item.url}
                >
                  {item.title}
                </Link>
              )}
              {item.items && isBelowDepthLimit(minDepth, maxDepth) && (
                <ul
                  css={{
                    color: theme.colors.textSuble,
                    listStyle: `none`,
                    marginLeft: 5,
                  }}
                >
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
