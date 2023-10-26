import { useAtom } from "jotai";
import { fullNumberAtom, selectRandomWordsAtom } from "../state";

export function NumberInput() {
  const [fullNumber, setFullNumber] = useAtom(fullNumberAtom);
  const [, selectRandomWords] = useAtom(selectRandomWordsAtom);
  const handleChange = (e: any) => {
    const n = e.target.value;
    setFullNumber(n);
    selectRandomWords();
  };

  return (
    <input
      type="number"
      placeholder="Enter number you want to remember"
      className="input input-bordered input-primary w-full text-xs sm:text-base"
      value={fullNumber}
      onChange={handleChange}
    />
  );
}
