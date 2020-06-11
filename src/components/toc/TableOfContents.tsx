import React from "react";
import slugify from "slugify";
import { TOCHeading, TOCList, TOCListItem, TOCWrapper } from "./styled";

interface IHeading {
  depth: number;
  value: string;
}

interface TOCProps {
  headings: IHeading[];
}

export const TOC: React.FC<TOCProps> = ({ headings }) => {
  return (
    <TOCWrapper>
      <TOCHeading>On this page</TOCHeading>
      <TOCList>
        {headings
          .filter((heading) => heading.depth === 2)
          .map((heading, idx) => {
            return (
              <TOCListItem key={`${idx}-${heading.value}`}>
                <a href={`#${slugify(heading.value)}`}>{heading.value}</a>
              </TOCListItem>
            );
          })}
      </TOCList>
    </TOCWrapper>
  );
};
