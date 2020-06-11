import React from "react";

import { Icon } from "../.";

export const Moon = (props) => {
  return (
    <Icon
      glyph={() => (
        <svg width={24} height={24} viewBox="0 0 24 24">
          <path
            d="M24 16.61C22.03 20.969 17.646 24 12.556 24 5.62 24 0 18.379 0 11.444 0 6.354 3.032 1.971 7.39 0a12.393 12.393 0 00-1.112 5.166c0 6.935 5.62 12.556 12.556 12.556 1.844 0 3.587-.391 5.166-1.111z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
      )}
      {...props}
    />
  );
};
