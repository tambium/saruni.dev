import React from "react";

import { ISidebarItem } from "../../types";

export const SidebarContext = React.createContext({});

interface SidebarProviderProps {
  activeItem: ISidebarItem;
  itemList: ISidebarItem[];
  children: React.ReactElement;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  activeItem,
  itemList,
  children,
}) => {
  const toggleSection = React.useCallback((item) => {}, []);

  const getItemState = React.useCallback(
    (item) => {
      return {
        isActive: item.title === activeItem.title,
      };
    },
    [activeItem]
  );

  const context = React.useMemo(() => {
    return {
      getItemState,
      onSectionTitleClick: toggleSection,
    };
  }, [getItemState, toggleSection]);

  return (
    <SidebarContext.Provider value={context}>
      {children}
    </SidebarContext.Provider>
  );
};
