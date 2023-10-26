import React from "react";
import { useAtom, useSetAtom } from "jotai";
import clipboardCopy from "clipboard-copy";
import {
  copyTextToClipboardAtom,
  isPromptVisibleAtom,
  promptAtom,
  alertAtom,
} from "../state";

const CopyToClipboardButton = () => {
  const [isVisible] = useAtom(isPromptVisibleAtom);
  const copyToClipboard = useSetAtom(copyTextToClipboardAtom);
  const [, setAlert] = useAtom(alertAtom);
  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="btn"
      onClick={(e) =>
        copyToClipboard(() => {
          setAlert({
            title: "text copied!",
            message:
              "Text copied to clipboard! Now paste it to chat gpt to get mnemonics!",
          });
        })
      }
    >
      Copy to Clipboard
    </button>
  );
};

export default CopyToClipboardButton;
