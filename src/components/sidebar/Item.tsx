import React from "react";
import { colors, useGlobalTheme } from "@saruni-ui/theme";

import { Accordion } from "./Accordion";
import { ItemLink } from "./ItemLink";
import { ISidebarItem } from "../../types";
import { useSidebar } from "../../hooks/use-sidebar-next";

interface ItemProps {
  item: ISidebarItem;
}

export const Item: React.FC<ItemProps> = ({ item }) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});
  const { getItemState } = useSidebar();
  const { isActive } = getItemState(item);

  if (item.items) {
    return <Accordion item={item} />;
  }

  return (
    <li
      css={{
        backgroundColor: isActive ? colors.surfaceSelectedPressed[mode] : null,
        borderRadius: "4px 0 0 4px",
      }}
    >
      <ItemLink item={item} />
    </li>
  );
};
