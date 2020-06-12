import React from "react";

import { TOCHeading, TOCList, TOCWrapper } from "./styled";
import { useActiveHash } from "../../hooks/use-active-hash";
import { ITOCItem } from "../../types";
import { getHeadingIds } from "./utils";
import { TOCItems } from "./.";

interface TOCProps {
  location: Location;
  tableOfContents: {
    items: ITOCItem[];
  };
  tableOfContentsDepth: number;
}

export const TOC: React.FC<TOCProps> = ({
  location,
  tableOfContents: { items },
  tableOfContentsDepth,
}) => {
  const headingIds = getHeadingIds({
    tableOfContents: items,
    depth: tableOfContentsDepth,
  });

  const activeHash = useActiveHash(headingIds);

  return (
    <TOCWrapper>
      <TOCHeading>On this page</TOCHeading>
      <TOCList>
        <TOCItems
          activeHash={activeHash}
          items={items}
          location={location}
          minDepth={1}
          maxDepth={tableOfContentsDepth}
        />
      </TOCList>
    </TOCWrapper>
  );
};
