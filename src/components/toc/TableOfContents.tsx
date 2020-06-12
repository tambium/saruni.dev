import React from "react";
import slugify from "slugify";
import { TOCHeading, TOCList, TOCListItem, TOCWrapper } from "./styled";
import { useTheme } from "emotion-theming";

interface IHeading {
  depth: number;
  value: string;
}

interface TOCProps {
  headings: IHeading[];
}

export const TOC: React.FC<TOCProps> = ({ headings }) => {
  const theme = useTheme();

  return (
    <TOCWrapper>
      <TOCHeading>On this page</TOCHeading>
      <TOCList>
        {headings
          .filter((heading) => heading.depth === 2)
          .map((heading, idx) => {
            return (
              <TOCListItem key={`${idx}-${heading.value}`}>
                <a
                  css={{
                    color: theme.colors.text,
                    textDecoration: "none",
                  }}
                  href={`#${slugify(heading.value)}`}
                >
                  {heading.value}
                </a>
              </TOCListItem>
            );
          })}
      </TOCList>
    </TOCWrapper>
  );
};
