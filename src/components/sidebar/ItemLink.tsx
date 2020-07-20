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
        color: isActive ? "pink" : colors.text[mode],
        display: "flex",
        fontSize: font.size.caption,
        padding: "4px 16px 4px 12px",
        textDecoration: "none",
      }}
      to={item.link}
    >
      {title}
    </Link>
  );
};
