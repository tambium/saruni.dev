import React from "react";
import { Item } from "./Item";
import { SectionTitle } from "./SectionTitle";
import { ISidebarItem } from "../../types";

interface AccordionProps {
  item: ISidebarItem;
}

export const Accordion: React.FC<AccordionProps> = ({ item }) => {
  return (
    <li>
      <SectionTitle item={item} />
      <ul css={{ listStyle: "none", marginBottom: 16 }}>
        {item.items.map((subitem) => {
          return <Item item={subitem} key={subitem.title} />;
        })}
      </ul>
    </li>
  );
};
