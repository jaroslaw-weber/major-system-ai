
import { Righteous } from 'next/font/google'

const font = Righteous({
  subsets: ['latin'],weight:'400'
})
export function Intro() {
  return (
    <div>
      <p className={"text-3xl text-center pb-8 font-bold uppercase "+font.className}>Major System Ai</p>
      <p className=" text-center ">generate mnemonics faster using chat gpt</p>
      <p className='text-center text-xs pt-4'>what is <a className='link link-primary' href="https://en.wikipedia.org/wiki/Mnemonic_major_system">major system?</a></p>
    </div>
  );
}
