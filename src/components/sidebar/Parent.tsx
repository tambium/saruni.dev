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
    <div>
      <a>{title}</a>
      {children}
    </div>
  );
};
