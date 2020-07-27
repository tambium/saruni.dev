import React from "react";

import { Icon } from "../.";

export const Tambium = (props) => {
  return (
    <Icon
      glyph={() => (
        <svg width={24} height={24} viewBox="0 0 24 24">
          <path
            d="M6.537 23.643a7.176 7.176 0 01-6.18-6.18 41.939 41.939 0 010-10.926 7.176 7.176 0 016.18-6.18 41.939 41.939 0 0110.926 0 7.176 7.176 0 016.18 6.18 41.936 41.936 0 010 10.926 7.176 7.176 0 01-6.18 6.18 41.936 41.936 0 01-10.926 0z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.407 8.295v1.459h.443a.9.9 0 01.9.9v2.77a.9.9 0 01-.9.9h-3.804a.9.9 0 01-.9-.9v-2.77a.9.9 0 01.9-.9h.417v-1.46h-.388a2.4 2.4 0 00-2.4 2.4v2.689a2.4 2.4 0 002.4 2.4h3.72a2.4 2.4 0 002.4-2.4v-2.688a2.4 2.4 0 00-2.4-2.4h-.388zm0 7.488v-1.46h-2.944v1.46h2.944z"
            fill={props.secondaryColor || "currentColor"}
          />
          <path
            d="M17.112 6.668a2.918 2.918 0 10-5.835 0h1.459a1.459 1.459 0 112.917 0h1.46zM12.736 17.332a2.918 2.918 0 01-5.836 0h1.459a1.459 1.459 0 002.918 0h1.459z"
            fill={props.secondaryColor || "currentColor"}
          />
          <path
            d="M11.277 6.642h1.459v10.69h-1.46V6.642zM17.112 6.674a.73.73 0 11-1.458 0 .73.73 0 011.458 0zM8.359 17.339a.73.73 0 11-1.46 0 .73.73 0 011.46 0z"
            fill={props.secondaryColor || "currentColor"}
          />
        </svg>
      )}
      {...props}
    />
  );
};
