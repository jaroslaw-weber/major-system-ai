import React from "react";
import { useAtom, useSetAtom } from "jotai";
import clipboardCopy from "clipboard-copy";
import {
  copyTextToClipboardAtom,
  isPromptVisibleAtom,
  promptAtom,
} from "../state";

const CopyToClipboardButton = () => {
  const [isVisible] = useAtom(isPromptVisibleAtom);
  const copyToClipboard = useSetAtom(copyTextToClipboardAtom);
  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="btn"
      onClick={(e) =>
        copyToClipboard(() => {
          alert("Text copied to clipboard! Now paste it to chat gpt to get mnemonics!");
        })
      }
    >
      Copy to Clipboard
    </button>
  );
};

export default CopyToClipboardButton;
