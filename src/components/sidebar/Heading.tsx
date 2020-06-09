import React from "react";

interface HeadingProps {
  title: string;
  children: React.ReactChild;
}

export const Heading: React.FC<HeadingProps> = ({ title, children }) => {
  return (
    <div>
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
};
