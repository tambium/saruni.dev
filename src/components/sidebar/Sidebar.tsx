import React from "react";
import { useGlobalTheme } from "@saruni-ui/theme";

import { Item } from "./Item";
import { getItemList, getActiveItem } from "../../utils/sidebar";
import { SidebarContainer, SidebarWrapper } from "./styled";
import { SidebarProvider } from "../../context/sidebar";
import { StaticItem } from "./StaticItem";
import { Book, Stack, Notepad } from "../icon/glyphs";
import { hexToRGBA } from "../../utils/color";

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
          <ul css={{ listStyle: "none", marginBottom: 32 }}>
            <StaticItem
              iconColor="#59C297"
              icon={
                <Book secondaryColor={hexToRGBA("#59C297", 0.5)} size={20} />
              }
              title="Docs"
            />
            <StaticItem
              iconColor="#83B5DB"
              icon={
                <Notepad secondaryColor={hexToRGBA("#83B5DB", 0.5)} size={20} />
              }
              title="Guides"
            />
            <StaticItem
              iconColor="#E08173"
              icon={
                <Stack secondaryColor={hexToRGBA("#E08173", 0.5)} size={20} />
              }
              title="Components"
            />
          </ul>

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
