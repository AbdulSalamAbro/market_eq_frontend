import { FC, ComponentProps } from "react";
import { PreviousOrNextEnum } from "../HeroBottom.types";

export interface PreviousOrNextProps extends ComponentProps<"div"> {
  previousOrNextLabel: PreviousOrNextEnum;
}

export const PreviousOrNext: FC<PreviousOrNextProps> = ({
  previousOrNextLabel,
}) => {
  return (
    <div className="text-xs desktop:text-[20px] font-medium tracking-[-0.13px]">
      {previousOrNextLabel} Insight
    </div>
  );
};
