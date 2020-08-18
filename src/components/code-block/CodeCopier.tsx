import React from "react";
import { Copy } from "../icon/glyphs";
import { copyToClipboard } from "./utils";

interface CodeCopierProps {
  codeString: string;
}

export const CodeCopier: React.FC<CodeCopierProps> = ({ codeString }) => {
  const [isCopied, setCopied] = React.useState(false);

  return (
    <div
      css={{ cursor: "pointer", display: "flex" }}
      onClick={async () => {
        await copyToClipboard(codeString);
        setCopied(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setCopied(false);
      }}
    >
      {isCopied ? <span>Copied</span> : <Copy size={14} />}
    </div>
  );
};
