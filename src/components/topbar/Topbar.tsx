import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  TopbarContainer,
  TopbarLeftside,
  TopbarSelect,
  TopbarSelectLabel,
  TopbarSelectLabelIconWrapper,
} from "./styled";
import { ChevronDown } from "../icon/glyphs";
import { getItemList, getActiveItem } from "../../utils/sidebar";

interface TopbarProps {
  location: Location;
}

export const Topbar: React.FC<TopbarProps> = ({ location }) => {
  const itemList = getItemList(location);
  const activeItem = getActiveItem(itemList.items, location);

  const { pathname } = useLocation();

  return (
    <TopbarContainer>
      <TopbarLeftside>
        <TopbarSelectLabel>
          <span>{activeItem?.title}</span>
          <TopbarSelectLabelIconWrapper>
            <ChevronDown size={12} />
          </TopbarSelectLabelIconWrapper>
        </TopbarSelectLabel>
        <TopbarSelect
          defaultValue={pathname}
          onChange={(e) => navigate(e.target.value)}
        >
          {itemList.items.map((item, idx) => {
            if (Array.isArray(item.items)) {
              const subitems = item.items.map((item) => {
                return (
                  <option
                    key={item.link}
                    label={item.title}
                    value={item.link}
                  />
                );
              });
              return (
                <optgroup key={`${idx}-${item.title}`} label={item.title}>
                  {subitems}
                </optgroup>
              );
            }
            return <option key={idx} label={item.title} value={item.link} />;
          })}
        </TopbarSelect>
      </TopbarLeftside>
      <div />
    </TopbarContainer>
  );
};
