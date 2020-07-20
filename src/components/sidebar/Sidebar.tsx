import React from "react";
import { useGlobalTheme } from "@saruni-ui/theme";

import { Item } from "./Item";
import { getItemList, getActiveItem } from "../../utils/sidebar";
import { SidebarContainer, SidebarWrapper } from "./styled";
import { SidebarProvider } from "../../context/sidebar";

interface SidebarProps {
  location: Location;
}

export const Sidebar: React.FC<SidebarProps> = ({ location }) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});

  const itemList = getItemList(location);
  const activeItem = getActiveItem(itemList.items, location);

  return (
    <SidebarProvider activeItem={activeItem} itemList={itemList.items}>
      <SidebarContainer mode={mode}>
        <SidebarWrapper>
          <ul css={{ listStyle: "none" }}>
            {itemList.items.map((item) => {
              return <Item item={item} key={item.title} />;
            })}
          </ul>
        </SidebarWrapper>
      </SidebarContainer>
    </SidebarProvider>
  );
};
