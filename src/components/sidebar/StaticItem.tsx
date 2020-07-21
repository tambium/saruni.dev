import React from "react";
import { font } from "@saruni-ui/theme";

interface StaticItemProps {
  icon: React.ReactElement;
  iconColor: string;
  title: string;
}

export const StaticItem: React.FC<StaticItemProps> = ({
  icon,
  iconColor,
  title,
}) => {
  return (
    <li css={{ display: "flex", padding: "4px 12px" }}>
      <div css={{ color: iconColor, marginRight: 12 }}>{icon}</div>
      <div css={{ fontSize: font.size.body }}>{title}</div>
    </li>
  );
};
