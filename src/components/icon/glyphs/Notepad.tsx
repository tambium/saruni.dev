import React from "react";

import { Icon } from "../.";

export const Notepad = (props) => {
  return (
    <Icon
      glyph={() => (
        <svg width={24} height={24} viewBox="0 0 24 24">
          <g fillRule="evenodd">
            <path
              d="M3 1h2.889L12 3.444 18.111 1H21a2 2 0 012 2v18a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2z"
              fill={props.secondaryColor || "currentColor"}
            />
            <path
              d="M5.889 1H18.11v13.444c0 .909-.956 1.5-1.769 1.094L12 13.366l-4.342 2.172a1.222 1.222 0 01-1.77-1.094V1z"
              fill="currentColor"
            />
          </g>
        </svg>
      )}
      {...props}
    />
  );
};
