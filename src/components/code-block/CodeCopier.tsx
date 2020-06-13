import React from "react";
import { Copy } from "../icon/glyphs";
import { copyToClipboard } from "./utils";

interface CodeCopierProps {
  codeString: string;
}

export const CodeCopier: React.FC<CodeCopierProps> = ({ codeString }) => {
  return (
    <div
      css={{ cursor: "pointer", display: "flex" }}
      onClick={() => copyToClipboard(codeString)}
    >
      <Copy size={14} />
    </div>
  );
};
