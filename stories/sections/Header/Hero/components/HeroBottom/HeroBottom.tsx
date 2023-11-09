import { IconPositionEnum, LinkWithArrowIcon } from "@/stories/atoms";
import { ComponentProps, FC } from "react";
import { PreviousOrNextEnum } from ".";
import { HeroBottomLinkContent } from "./components";

const rootClass =
  "w-full absolute bottom-0 flex items-center justify-between border-white border-opacity-5 border-t-2 py-3 px-[18px] desktop:px-5";

export interface HeroBottomProps extends ComponentProps<"div"> {
  previousHref: string;
  nextHref: string;
  previousMin: number;
  nextMin: number;
}

export const HeroBottom: FC<HeroBottomProps> = ({
  previousHref,
  nextHref,
  previousMin,
  nextMin,
}) => {
  return (
    <div className={rootClass}>
      <LinkWithArrowIcon
        iconPosition={IconPositionEnum.LEFT}
        href={previousHref}
        iconClassName="w-4 desktop:w-[30px]"
        className="gap-[15px] desktop:gap-[30px]"
      >
        <HeroBottomLinkContent
          previousOrNextLabel={PreviousOrNextEnum.PREVIOUS}
          min={previousMin}
        />
      </LinkWithArrowIcon>

      <LinkWithArrowIcon
        href={nextHref}
        iconPosition={IconPositionEnum.RIGHT}
        iconClassName="w-4 desktop:w-[30px]"
        className="gap-[15px] desktop:gap-[30px]"
      >
        <HeroBottomLinkContent
          previousOrNextLabel={PreviousOrNextEnum.NEXT}
          min={nextMin}
        />
      </LinkWithArrowIcon>
    </div>
  );
};
