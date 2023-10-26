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
      placeholder="Enter number"
      className="input input-bordered input-primary w-full"
      value={fullNumber}
      onChange={handleChange}
    />
  );
}
