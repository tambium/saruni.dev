import React from "react";

interface ParentProps {
  children: React.ReactChild;
  depth: number;
  isOpen?: boolean;
  title: string;
}

export const Parent: React.FC<ParentProps> = ({
  children,
  depth,
  isOpen,
  title,
}) => {
  return (
    <div css={{}}>
      <a css={{ color: "red" }}>{title}</a>
      <div css={{ paddingLeft: 16 }}>{children}</div>
    </div>
  );
};
