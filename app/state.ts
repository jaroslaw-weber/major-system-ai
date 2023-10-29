import { atom } from "jotai";
import { getMnemonicWords } from "./getMnemonicWords";
import { pick, sample } from "lodash";
import clipboardCopy from "clipboard-copy";
import _ from "lodash";

export const fullNumberAtom = atom("");
export const selectedWordsAtom = atom<string[]>([]);
export const availableMnemonicsAtom = atom((get) => {
  const input = get(fullNumberAtom);
  const options = getMnemonicWords(input);

  return options;
});

export interface AlertContent {
  title: string;
  message: string;
}

export const alertAtom = atom<AlertContent>({
  title: "",
  message: "",
});

const promptTemplates = [
  //dalle 4
  `Generate images for following words: WORD_LIST. You should include 3 words per image. Images should be cute or artistic. Also can u try to put words in order in the image?`,
  //chat gpt
  `Generate 1-3 sentence mnemonic for major system based on those words: WORD_LIST. Order is super important. Answer should be concise. Give me 10 choices. Highlight those words in the text. `,
  `Generate 2-5 logical sentence mnemonic stories for major system based on those words: WORD_LIST. Order is super important. Give me 10 choices. Highlight those key words in the text.`,
  
];

export const promptAtom = atom((get)=>{
  const words = get(selectedWordsAtom);
  return getRandomPrompt(words)
});

function getRandomPrompt(words:string[]){
  const wordList = words.filter(Boolean).join(", ");
  const randomTemplate = sample(promptTemplates);
  const text = randomTemplate?.replace("WORD_LIST", wordList);
  return text;
}

export const setRandomPromptAtom = atom(null, (get,set)=>{
  const words = get(selectedWordsAtom);
//set again same words, should regenerate the prompt
  set(selectedWordsAtom,[... words]);
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
  console.log("randomly selected: ", selected);
  set(selectedWordsAtom, selected);
});

export const setRandomNumberAtom = atom(null, (get, set) => {
  //get random 10 digit number
  const randomNumber = _.random(1000000000, 9999999999).toString();
  set(fullNumberAtom, randomNumber);
  set(selectRandomWordsAtom);
});

export const copyTextToClipboardAtom = atom(
  null,
  (get, set, onCopied: () => void) => {
    const text = get(promptAtom);
    clipboardCopy(text)
      .then(() => {
        onCopied();
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  }
);
