import React from "react";

import { Icon } from "../.";

export const ChevronDown = (props) => {
  return (
    <Icon
      glyph={() => (
        <svg width={24} height={24} viewBox="0 0 24 24">
          <path
            d="M11.148 18.132L1.386 8.634a1.15 1.15 0 010-1.659l1.139-1.107a1.23 1.23 0 011.702-.002L12 13.393l7.773-7.527a1.23 1.23 0 011.702.002l1.139 1.107c.47.459.47 1.201 0 1.66l-9.762 9.497a1.23 1.23 0 01-1.704 0z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
      )}
      {...props}
    />
  );
};
