import React from "react";
import { useTheme } from "emotion-theming";
import { ItemLink } from "./ItemLink";
import { ISidebarItem } from "../../types";

interface SplitButtonProps {
  item: ISidebarItem;
}

const SplitButton: React.FC<SplitButtonProps> = ({ item }) => {
  return <ItemLink item={item} />;
};

interface TitleProps {
  item: ISidebarItem;
}

export const Title: React.FC<TitleProps> = ({ item }) => {
  const theme = useTheme();

  return (
    <h5
      css={{
        fontSize: theme.fonts.size.tiny,
        fontWeight: 600,
        textTransform: "uppercase",
        marginBottom: 4,
        marginTop: 16,
        paddingLeft: 12,
      }}
    >
      {item.title}
    </h5>
  );
};

interface SectionTitleProps {
  item: ISidebarItem;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ item }) => {
  if (item.link) {
    return <SplitButton item={item} />;
  }

  return <Title item={item} />;
};
