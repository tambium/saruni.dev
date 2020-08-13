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
          color: isActive ? colors.text[mode] : colors.textSubdued[mode],
          fontSize: font.size.body,
          fontWeight: isActive ? 500 : undefined,
          transition: "color 0.2s ease",
          textDecoration: "none",
          "&:hover": {
            color: isActive ? undefined : colors.text[mode],
            textDecoration: "none",
          },
        }}
      >
        {title}
      </div>
    </li>
  );
};
