import React from "react";
import { Link } from "gatsby";
import { colors, font, useGlobalTheme } from "@saruni-ui/theme";

import { useSidebar } from "../../hooks/use-sidebar-next";
import type { ISidebarItem } from "../../types";

interface ItemLinkProps {
  item: ISidebarItem;
}

export const ItemLink: React.FC<ItemLinkProps> = ({ item }) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});
  const { getItemState } = useSidebar();
  const { isActive } = getItemState(item);

  const { title } = item;
  return (
    <Link
      css={{
        color: isActive ? colors.interactive[mode] : colors.textSubdued[mode],
        display: "flex",
        fontSize: font.size.body,
        fontWeight: isActive ? 500 : undefined,
        padding: "4px 16px 4px 12px",
        textDecoration: "none",
        transition: "color 0.2s ease",
        "&:hover": {
          color: isActive ? undefined : colors.text[mode],
          textDecoration: "none",
        },
      }}
      to={item.link}
    >
      {title}
    </Link>
  );
};
