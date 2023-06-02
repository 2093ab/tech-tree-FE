import { makeTTS } from "@utils/makeTTS";
import clsx from "clsx";
import Image from "next/image";

interface PropsType {
  message: string;
  isMine?: boolean;
}

export default function ChatMessage({ message, isMine }: PropsType) {
  const handleSpeaker = () => {
    makeTTS(message);
  };
  return (
    <div
      className={clsx("flex", isMine ? "flex-row-reverse" : "flex-row", "mb-5")}
    >
      <p
        className={clsx(
          "px-[1rem] py-[0.625rem] max-w-[15rem] rounded-b-[1.25rem] whitespace-pre-wrap inline-block",
          isMine
            ? "bg-[#C2E4EF] rounded-tl-[1.25rem]"
            : "bg-[#F3F6FF] rounded-tr-[1.25rem]"
        )}
      >
        {message}
      </p>
      {!isMine && (
        <div className="flex flex-col-reverse ml-2">
          <Image
            alt="speaker"
            src="/icons/speaker.svg"
            width={35}
            height={35}
            onClick={handleSpeaker}
          />
        </div>
      )}
    </div>
  );
}
