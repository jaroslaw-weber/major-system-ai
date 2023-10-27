import { useState } from "react";
import { MnemonicWords } from "../MnemonicWords";
import { selectedWordsAtom } from "../state";
import { useAtom } from "jotai";

export function SelectMnemonicWord(p: {
  index: number;
  option: MnemonicWords;
}) {
  const { index, option } = p;
  const { words } = option;
  const [selectedWords, setSelectedWords] = useAtom(selectedWordsAtom);
  const selectedWord = selectedWords?.[index]

  const selectedWordDisplay =option.digits+': '+ selectedWord

  const handleSelectChange = (event:any) => {
    const newValue = event.target.value;
	const newWords = [...selectedWords]
	newWords[index] = newValue
    // Update the selectedWords state with the new value
    setSelectedWords(newWords);
  };
  return (
    <select
      className="select select-bordered w-full"
      onChange={handleSelectChange} // Add the onChange event handler
      value={selectedWord} // Set the selected value>
    >
      {words?.map((word, i) => (
        <option key={i} value={word}>
          {option.digits}: {word}
        </option>
      ))}
    </select>
  );
}
