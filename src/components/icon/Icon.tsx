import React, { ReactElement } from "react";
import styled from "@emotion/styled";

interface WrapperProps {
  primaryColor?: string;
  secondaryColor?: string;
  size: number;
}

const getSize = ({ size }: WrapperProps) =>
  size ? `height: ${size}px; width: ${size}px;` : null;

export const IconWrapper = styled("span")<WrapperProps>`
  ${getSize} color: ${(p: WrapperProps) => p.primaryColor || "currentColor"};
  display: inline-flex;
  fill: ${(p: WrapperProps) => p.secondaryColor || "#fff"};
  flex-shrink: 0;
  line-height: 1;
  > svg {
    ${getSize} max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    pointer-events: none;
    vertical-align: bottom;
  }
`;

export interface IconProps {
  glyph?: (props: { role: string }) => ReactElement;
  label: string;
  primaryColor?: string;
  secondaryColor?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = (props) => {
  const {
    glyph: Glyph,
    label,
    primaryColor,
    secondaryColor,
    size = 12,
  } = props;

  return (
    <IconWrapper
      aria-label={label}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      size={size}
    >
      {Glyph ? <Glyph role="presentation" /> : null}
    </IconWrapper>
  );
};
