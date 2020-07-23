import React from "react";
import { useGlobalTheme } from "@saruni-ui/theme";
import { Link } from "gatsby";

import { Item } from "./Item";
import { getItemList, getActiveItem } from "../../utils/sidebar";
import { SidebarContainer, SidebarWrapper } from "./styled";
import { SidebarProvider } from "../../context/sidebar";
import { StaticItem } from "./StaticItem";
import { Book, Stack, Notepad } from "../icon/glyphs";
import { hexToRGBA } from "../../utils/color";

interface SidebarProps {
  location: Location;
  section?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ location, section }) => {
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
            <Link
              css={{ "&:active": { textDecoration: "none" } }}
              to="/docs/overview"
            >
              <StaticItem
                isActive={section === "docs"}
                iconColor="#59C297"
                icon={
                  <Book secondaryColor={hexToRGBA("#59C297", 0.5)} size={20} />
                }
                title="Docs"
              />
            </Link>
            <Link
              css={{ "&:active": { textDecoration: "none" } }}
              to="/guides/cors"
            >
              <StaticItem
                isActive={section === "guides"}
                iconColor="#83B5DB"
                icon={
                  <Notepad
                    secondaryColor={hexToRGBA("#83B5DB", 0.5)}
                    size={20}
                  />
                }
                title="Guides"
              />
            </Link>
            <a
              css={{ "&:active": { textDecoration: "none" } }}
              href="https://5efcf81e64c94600226b7b2e-xhxwxlzoec.chromatic.com/"
              target="_blank"
            >
              <StaticItem
                iconColor="#E08173"
                icon={
                  <Stack secondaryColor={hexToRGBA("#E08173", 0.5)} size={20} />
                }
                title="Components"
              />
            </a>
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
