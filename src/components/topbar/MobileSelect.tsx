import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { useGlobalTheme } from "@saruni-ui/theme";

import {
  TopbarSelect,
  TopbarSelectLabel,
  TopbarSelectLabelIconWrapper,
} from "./styled";
import { ChevronDown } from "../icon/glyphs";
import { getItemList, getActiveItem } from "../../utils/sidebar";

interface MobileSelectProps {
  location: Location;
}

export const MobileSelect: React.FC<MobileSelectProps> = ({ location }) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});

  const itemList = getItemList(location);
  const activeItem = getActiveItem(itemList.items, location);

  const { pathname } = useLocation();

  return (
    <React.Fragment>
      <TopbarSelectLabel mode={mode}>
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
                <option key={item.link} label={item.title} value={item.link}>
                  {item.title}
                </option>
              );
            });
            return (
              <optgroup key={`${idx}-${item.title}`} label={item.title}>
                {subitems}
              </optgroup>
            );
          }
          return (
            <option key={idx} label={item.title} value={item.link}>
              {item.title}
            </option>
          );
        })}
      </TopbarSelect>
    </React.Fragment>
  );
};
