import React from "react";
import { Link } from "gatsby";
import { colors, useGlobalTheme, font } from "@saruni-ui/theme";

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
  const {
    tokens: { mode },
  } = useGlobalTheme({});

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
                      ? colors.interactive[mode]
                      : colors.textSubdued[mode],
                    border: 0,
                    fontSize: font.size.body,
                    fontWeight: isActive ? 500 : undefined,
                    transition: `color 0.2s ease`,
                    textDecoration: "none",
                    "&:hover": {
                      color: colors.text[mode],
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
                    color: colors.text[mode],
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
