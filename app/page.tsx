"use client";
import { NumberInput } from "./components/NumberInput";
import { SelectMnemonicWord } from "./components/SelectMnemonicWord";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  alertAtom,
  availableMnemonicsAtom,
  fullNumberAtom,
  isPromptVisibleAtom,
  promptAtom,
  selectRandomWordsAtom,
  setRandomNumberAtom,
} from "./state";
import { getMnemonicWords } from "./getMnemonicWords";
import { Prompt } from "./components/Prompt";
import { Intro } from "./components/Intro";
import CopyToClipboardButton from "./components/CopyToClipBoardButton";
import { Alert } from "./components/Alert";

export default function Home() {
  const [options] = useAtom(availableMnemonicsAtom);
  const isPromptVisible = useAtomValue(isPromptVisibleAtom)
  const [, selectRandomWords] = useAtom(selectRandomWordsAtom);
  const setRandomNumber = useSetAtom(setRandomNumberAtom)
  const [alert] = useAtom(alertAtom);
  const dropdowns = [];
  console.log("options", options);
  for (let i = 0; i < options.length; i++) {
    dropdowns.push(
      <SelectMnemonicWord key={i} index={i} option={options[i]} />
    );
  }

  const randomizeButton = (
    <button className="btn btn-primary" onClick={(e) => selectRandomWords()}>
      randomize
    </button>
  );
  const randomNumberButton = (
    <button className="btn btn-primary" onClick={(e) => setRandomNumber()}>
      generate random number
    </button>
  )

  const promptPanel =<div  className="flex-1 flex flex-col gap-8" >
  <div className="pt-8">
    <Prompt />
  </div>
  <CopyToClipboardButton />
</div>

  return (
    <main className="flex min-w-screen min-h-screen justify-center items-center p-8 md:p-12">
     
      <div className="flex flex-col sm:w-3/4 md:flex-row gap-8 md:gap-28 items-center justify-center">
        <div className="flex-1 flex flex-col gap-4 w-full max-w-md">
          <Intro />
          <NumberInput />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">{dropdowns}</div>
          {randomizeButton}
          {randomNumberButton}
        </div>
        {isPromptVisible ? promptPanel: null}
      </div> <Alert  />
    </main>
  );
}
