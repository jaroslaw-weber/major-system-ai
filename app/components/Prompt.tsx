import { useAtom } from "jotai";
import { isPromptVisibleAtom, promptAtom } from "../state";

export function Prompt() {
  const [prompt] = useAtom(promptAtom);
  const [isPromptVisible] = useAtom(isPromptVisibleAtom);
  console.log("prompt", prompt);
  if (!isPromptVisible) {
    return null;
  }
  return (
    <div className="flex flex-col gap-8 w-full">
      <p className="text-sm text-center">copy prompt below to chat gpt</p>
	  <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png" />
    </div>
  </div>
  <div className="chat-bubble text-sm">{prompt}</div>
</div>
    </div>
  );
}
