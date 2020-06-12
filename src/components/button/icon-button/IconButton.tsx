import React from "react";
// import { focus } from "../../theme";

interface IconButtonProps {
  ariaLabel: string;
  backgroundColor?: string;
  color: string;
  icon: React.ReactElement;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  ariaLabel,
  backgroundColor,
  color,
  icon,
  onClick,
}) => {
  return (
    <button
      aria-label={ariaLabel}
      css={{
        alignItems: "center",
        appearance: "none",
        backgroundColor,
        borderRadius: 4,
        borderWidth: 0,
        color,
        cursor: "pointer",
        display: "inline-flex",
        fontSize: "1rem",
        fontWeight: 500,
        justifyContent: "center",
        outline: "none",
        padding: 6,
        position: "relative",
        transition: "all 250ms",
        userSelect: "none",
        verticalAlign: "middle",
        whiteSpace: "nowrap",
        "&:focus": {
          // boxShadow: `0 0 0 2px ${focus()}`,
        },
      }}
      type="button"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
