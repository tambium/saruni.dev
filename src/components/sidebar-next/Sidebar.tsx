import React from "react";
import { useTheme as useEmotionTheme } from "emotion-theming";

import { Item } from "./Item";
import { getItemList, getActiveItem } from "../../utils/sidebar";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoContainer,
  SidebarDocsHighlight,
} from "../sidebar/styled";
import { IconButton } from "../button";
import { useTheme } from "../../hooks/use-theme";
import { Moon, Sun } from "../icon/glyphs";
import { SidebarProvider } from "../../context/sidebar";

interface SidebarProps {
  location: Location;
}

export const Sidebar: React.FC<SidebarProps> = ({ location }) => {
  const { isLight, switchTheme } = useTheme();
  const theme = useEmotionTheme();

  const itemList = getItemList(location);
  const activeItem = getActiveItem(itemList.items, location);

  return (
    <SidebarProvider activeItem={activeItem} itemList={itemList.items}>
      <SidebarContainer>
        <SidebarWrapper>
          <SidebarLogoContainer>
            <div>
              <span css={{ fontSize: 21, fontWeight: 600 }}>Saruni</span>
              <SidebarDocsHighlight>Docs</SidebarDocsHighlight>
            </div>
            <IconButton
              ariaLabel="Toggle theme"
              backgroundColor={theme.colors.surface}
              color={theme.colors.text}
              icon={isLight ? <Moon size={14} /> : <Sun size={14} />}
              onClick={switchTheme}
            />
          </SidebarLogoContainer>
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
