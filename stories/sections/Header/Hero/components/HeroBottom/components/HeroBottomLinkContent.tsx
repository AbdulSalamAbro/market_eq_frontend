import React, { ComponentProps, FC } from "react";
import { MinutesToRead, PreviousOrNext } from ".";
import { PreviousOrNextEnum } from "..";

export interface HeroBottomLinkContentProps extends ComponentProps<"div"> {
  previousOrNextLabel: PreviousOrNextEnum;
  min: number;
}

export const HeroBottomLinkContent: FC<HeroBottomLinkContentProps> = ({
  previousOrNextLabel,
  min,
}) => {
  return (
    <div className="self-start flex flex-col gap-[5.4px] leading-none items-start">
      <PreviousOrNext previousOrNextLabel={previousOrNextLabel} />
      <MinutesToRead mins={min} />
    </div>
  );
};
