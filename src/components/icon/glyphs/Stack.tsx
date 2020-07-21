import React from "react";

import { Icon } from "../.";

export const Stack = (props) => {
  return (
    <Icon
      glyph={() => (
        <svg width={24} height={24} viewBox="0 0 24 24">
          <g fill="none" fillRule="evenodd">
            <path
              d="M1.653 5.495l9.9-4.4a1.1 1.1 0 01.894 0l9.9 4.4c.87.387.87 1.623 0 2.01l-9.9 4.4a1.1 1.1 0 01-.894 0l-9.9-4.4c-.87-.387-.87-1.623 0-2.01z"
              fill={props.secondaryColor || "currentColor"}
            />
            <path
              d="M3.104 10.35l8.45 3.755a1.1 1.1 0 00.893 0l8.449-3.755 1.45.645c.872.387.872 1.623 0 2.01l-9.9 4.4a1.1 1.1 0 01-.893 0l-9.9-4.4c-.87-.387-.87-1.623 0-2.01l1.451-.645zm0 5.5l8.45 3.755a1.1 1.1 0 00.893 0l8.449-3.755 1.45.645c.872.387.872 1.623 0 2.01l-9.9 4.4a1.1 1.1 0 01-.893 0l-9.9-4.4c-.87-.387-.87-1.623 0-2.01l1.451-.645z"
              fill="currentColor"
            />
          </g>
        </svg>
      )}
      {...props}
    />
  );
};
