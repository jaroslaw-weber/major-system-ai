
import { Righteous } from 'next/font/google'

const font = Righteous({
  subsets: ['latin'],weight:'400'
})
export function Intro() {
  return (
    <div>
      <p className={"text-3xl text-center pb-8 font-bold uppercase"+font.className}>Major System Ai</p>
      <p className="text-sm text-center ">generate mnemonics faster using chat gpt</p>
    </div>
  );
}
