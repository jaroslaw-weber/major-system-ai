import { MnemonicWords } from "./MnemonicWords";
import { chunk } from "lodash";
import { mnemonicDb } from "./mnemonicDb";

export function getMnemonicWords(fullNumber: string): MnemonicWords[] {
  const pairs: string[] = chunk(fullNumber, 2).map((x) => x.join(""));
  return pairs.map(numberChunkToMnemonicWords);
}

export function numberChunkToMnemonicWords(digits: string): MnemonicWords {
  if (digits.length > 2) {
    throw new Error("too many digits");
  }

  const words: string[] = mnemonicDb[digits];
  return {
    words,
    digits: digits,
  };
}


