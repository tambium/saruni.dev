import React from "react";
import { navigate } from "@reach/router";
import { useLocation } from "@reach/router";
import { useTheme as useEmotionTheme } from "emotion-theming";

import {
  TopbarContainer,
  TopbarLeftside,
  TopbarSelect,
  TopbarSelectLabel,
  TopbarSelectLabelIconWrapper,
} from "./styled";
import { useSidebar } from "../../hooks/use-sidebar";
import { ChevronDown } from "../icon/glyphs";

interface TopbarProps {}

export const Topbar: React.FC<TopbarProps> = ({}) => {
  const selectRef = React.createRef<HTMLSelectElement>();
  const [selectRefValue, setSelectRefValue] = React.useState(null);

  const data = useSidebar();
  const { pathname } = useLocation();
  const theme = useEmotionTheme();

  React.useEffect(() => {
    if (selectRef.current) {
      setSelectRefValue(selectRef.current);
    }
  }, [selectRef]);

  return (
    <TopbarContainer>
      <TopbarLeftside>
        <TopbarSelectLabel>
          <span>
            {selectRefValue?.options[selectRefValue?.selectedIndex].label}
          </span>
          <TopbarSelectLabelIconWrapper>
            <ChevronDown size={12} />
          </TopbarSelectLabelIconWrapper>
        </TopbarSelectLabel>
        <TopbarSelect
          defaultValue={pathname}
          onChange={(e) => navigate(e.target.value)}
          ref={selectRef}
        >
          {data.map(({ node: { label, link, items, id } }) => {
            if (Array.isArray(items)) {
              const subitems = items.map(({ label, link }) => {
                return <option key={link} label={label} value={link} />;
              });
              return (
                <optgroup key={link} label={label}>
                  {subitems}
                </optgroup>
              );
            }
            return <option key={id} label={label} value={link} />;
          })}
        </TopbarSelect>
      </TopbarLeftside>
      <div />
    </TopbarContainer>
  );
};
