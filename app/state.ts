import { atom } from "jotai";
import { getMnemonicWords } from "./getMnemonicWords";
import { pick, sample } from "lodash";

export const fullNumberAtom = atom("");
export const selectedWordsAtom = atom<string[]>([]);
export const availableMnemonicsAtom = atom((get) => {
  const input = get(fullNumberAtom);
  const options = getMnemonicWords(input);

  return options;
});
export const promptAtom = atom((get) => {
  const selected = get(selectedWordsAtom);
  const text = `Generate 1-3 sentence mnemonic for major system based on those words: ${selected
    .filter(Boolean)
    .join(", ")}. Order is super important. Answer should be concise. Give me 5 choices. Highlight those words in the text. `;
  return text;
});
export const isPromptVisibleAtom = atom((get) => {
  const selected = get(selectedWordsAtom);
  return selected.filter((x) => !!x).length > 0;
});
export const selectRandomWordsAtom = atom(null, (get, set) => {
  const selected: string[] = [];
  const available = get(availableMnemonicsAtom);
  for (let i = 0; i < available.length; i++) {
    const random = sample(available[i].words);
    selected.push(random ?? "");
  }
  console.log('randomly selected: ', selected)
  set(selectedWordsAtom, selected);
});
