import React from "react";
import { useAtom } from "jotai";
import clipboardCopy from "clipboard-copy";
import { isPromptVisibleAtom, promptAtom } from "../state";

const CopyToClipboardButton = () => {
	const [text] = useAtom(promptAtom)
  const [isVisible] = useAtom(isPromptVisibleAtom);
  if (!isVisible) {
    return null;
  }
  const handleCopyClick = () => {
    clipboardCopy(text)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <button className="btn " onClick={handleCopyClick}>
      Copy to Clipboard
    </button>
  );
};

export default CopyToClipboardButton;
