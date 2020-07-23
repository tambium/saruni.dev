import React from "react";
import { font, colors, useGlobalTheme } from "@saruni-ui/theme";

interface StaticItemProps {
  icon: React.ReactElement;
  iconColor: string;
  isActive?: boolean;
  title: string;
}

export const StaticItem: React.FC<StaticItemProps> = ({
  icon,
  iconColor,
  isActive,
  title,
}) => {
  const {
    tokens: { mode },
  } = useGlobalTheme({});

  return (
    <li css={{ display: "flex", padding: "4px 16px" }}>
      <div css={{ color: iconColor, marginRight: 12 }}>{icon}</div>
      <div
        css={{
          color: colors.text[mode],
          fontSize: font.size.body,
          fontWeight: isActive ? 500 : undefined,
        }}
      >
        {title}
      </div>
    </li>
  );
};
