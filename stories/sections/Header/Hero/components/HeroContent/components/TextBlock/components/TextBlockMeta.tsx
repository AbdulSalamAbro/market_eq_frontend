import Image from "next/image";
import { FC } from "react";
import clockIcon from "@/stories/assets/icons/Clock.svg";

const MinutesToRead = (timeToRead?: number) => {
  return <span className="font-light">{`${timeToRead} minutes`}</span>;
};

export type TextBlockMetaProps = {
  timeToRead?: number;
  date?: string;
};

export const TextBlockMeta: FC<TextBlockMetaProps> = ({ timeToRead, date }) => {
  return (
    <div className="w-full flex items-center gap-[30px] text-[12px] text-['Inter'] font-light desktop:text-lg tracking-[-0.13] leading-[17.9px]">
      <div className="flex items-center gap-[8px] ">
        <div className="w-[14px] h-[14px] desktop:w-[22px] desktop:h-[22px]">
          <Image src={clockIcon} alt="" className="!relative" fill />
        </div>
        <span className="font-medium">
          Read time <span className="font-light">{`${timeToRead} mins`}</span>
        </span>
      </div>
      <div className="contents">{date}</div>
    </div>
  );
};
