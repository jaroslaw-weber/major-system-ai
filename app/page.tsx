"use client";
import { NumberInput } from "./components/NumberInput";
import { SelectMnemonicWord } from "./components/MnemonicDropdown";
import { useAtom } from "jotai";
import { availableMnemonicsAtom, fullNumberAtom, promptAtom } from "./state";
import { getMnemonicWords } from "./getMnemonicWords";
import { Prompt } from "./components/Prompt";
import { Intro } from "./components/Intro";
import CopyToClipboardButton from "./components/CopyToClipBoardButton";

export default function Home() {
  const [numberInput] = useAtom(fullNumberAtom);
  const [prompt] = useAtom(promptAtom);
  const [options] = useAtom(availableMnemonicsAtom);
  const dropdowns = [];
  console.log("options", options);
  for (let i = 0; i < options.length; i++) {
    dropdowns.push(
      <SelectMnemonicWord key={i} index={i} option={options[i]} />
    );
  }

  return (
    <main className="flex min-w-screen min-h-screen justify-center items-center font-inter">
      <div className="flex flex-col gap-8  md:w-1/2 items-center justify-center">
        <Intro/>
        <NumberInput />

        <div className="grid grid-cols-4 gap-4">{dropdowns}</div>
        <div className="pt-8">
        <Prompt /></div>
        <CopyToClipboardButton/>
      </div>
    </main>
  );
}
