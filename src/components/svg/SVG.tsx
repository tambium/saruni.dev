import React from "react";

interface SVGProps {
  image?: () => React.ReactElement;
  primaryColor?: string;
  secondaryColor?: string;
}

export const SVG: React.FC<SVGProps> = ({
  image: Image,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <span
      css={{
        color: primaryColor || "currentColor",
        fill: secondaryColor || undefined,
        "& svg": {
          maxWidth: "100%",
        },
      }}
    >
      {Image ? <Image /> : null}
    </span>
  );
};
