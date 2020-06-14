import React from "react";
import { useTheme } from "emotion-theming";
import { Link } from "gatsby";

import { useSidebar } from "../../hooks/use-sidebar-next";
import type { ISidebarItem } from "../../types";

interface ItemLinkProps {
  item: ISidebarItem;
}

export const ItemLink: React.FC<ItemLinkProps> = ({ item }) => {
  const theme = useTheme();
  const { getItemState } = useSidebar();
  const { isActive } = getItemState(item);

  const { title } = item;
  return (
    <Link
      css={{
        color: isActive ? theme.colors.brand : theme.colors.textSubtle,
        display: "flex",
        fontSize: theme.fonts.size.small,
        padding: "4px 16px 4px 12px",
        textDecoration: "none",
      }}
      to={item.link}
    >
      {title}
    </Link>
  );
};
