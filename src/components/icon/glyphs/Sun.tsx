import React from "react";

import { Icon } from "../.";

export const Sun = (props) => {
  return (
    <Icon
      glyph={() => (
        <svg width={24} height={24} viewBox="0 0 24 24">
          <path
            d="M12 17a5 5 0 110-10 5 5 0 010 10zm0-13a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm10-10a2 2 0 110-4 2 2 0 010 4zm-2.95-7.05a2 2 0 110-4 2 2 0 010 4zm-14.1 14.1a2 2 0 110-4 2 2 0 010 4zm14.11.01a2 2 0 110-4 2 2 0 010 4zM4.95 6.95a2 2 0 110-4 2 2 0 010 4zM2 14a2 2 0 110-4 2 2 0 010 4z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
      )}
      {...props}
    />
  );
};
