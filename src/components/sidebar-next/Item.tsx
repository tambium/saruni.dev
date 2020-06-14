import React from "react";
import { useTheme } from "emotion-theming";

import { Accordion } from "./Accordion";
import { ItemLink } from "./ItemLink";
import { ISidebarItem } from "../../types";
import { useSidebar } from "../../hooks/use-sidebar-next";
import { hexToRGBA } from "../../utils/color";

interface ItemProps {
  item: ISidebarItem;
}

export const Item: React.FC<ItemProps> = ({ item }) => {
  const theme = useTheme();

  const { getItemState } = useSidebar();
  const { isActive } = getItemState(item);

  if (item.items) {
    return <Accordion item={item} />;
  }

  return (
    <li
      css={{
        backgroundColor: isActive ? hexToRGBA(theme.colors.brand, 0.1) : null,
        borderRadius: "4px 0 0 4px",
      }}
    >
      <ItemLink item={item} />
    </li>
  );
};
