import React from "react";

import { Icon } from "../.";

export const Book = (props) => {
  return (
    <Icon
      glyph={() => (
        <svg width={24} height={24} viewBox="0 0 24 24">
          <g fillRule="nonzero">
            <path
              d="M12 23a2.437 2.437 0 01-1.728-.716l-1.013-1.012a2.444 2.444 0 00-1.728-.716H2.222A1.222 1.222 0 011 19.333V2.223C1 1.546 1.547 1 2.222 1h4.89C9.11 1 10.884 1.96 12 3.444V23z"
              fill={props.secondaryColor || "currentColor"}
            />
            <path
              d="M12 23V3.444A6.102 6.102 0 0116.889 1h4.889C22.453 1 23 1.547 23 2.222v17.111c0 .675-.547 1.223-1.222 1.223h-5.309c-.648 0-1.27.257-1.728.716l-1.013 1.012A2.437 2.437 0 0112 23z"
              fill="currentColor"
            />
          </g>
        </svg>
      )}
      {...props}
    />
  );
};
