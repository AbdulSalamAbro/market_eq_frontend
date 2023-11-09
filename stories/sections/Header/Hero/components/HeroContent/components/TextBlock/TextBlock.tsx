import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { TextBlockMeta, TextBlockTitle, TextBlockDescription } from "./components";
import { HeroContentVariant } from "../..";

export const textBlock = cva(
  "break-normal flex-col justify-start items-start gap-5 flex desktop:w-full",
  {
    variants: {
      intent: {
        [HeroContentVariant.FIRST]: ["desktop:gap-[30px]"],
        [HeroContentVariant.SECOND]: ["desktop:gap-[15px]"],
        [HeroContentVariant.THIRD]: [
          "desktop:gap-[26px]",
          "tablet:w-[455px] leading-[1.30]",
        ],
        [HeroContentVariant.FOURTH]: ["desktop:gap-[24px]"],
      },
    },
  }
);

export type TextBlockProps = ComponentProps<"div"> &
  VariantProps<typeof textBlock> & {
    title: string;
    description: string;
    intent: HeroContentVariant;
    showMeta?: boolean;
    timeToRead?: number;
    date?: string;
  };

export const TextBlock: FC<TextBlockProps> = ({
  title,
  description,
  intent,
  showMeta,
  timeToRead,
  date,
}) => {
  const shouldShowMeta = showMeta && timeToRead && date;

  return (
    <div id="txt-block" className={twMerge(textBlock({ intent }))}>
      <TextBlockTitle title={title} intent={intent} />
      <TextBlockDescription description={description} intent={intent} />
      {shouldShowMeta && <TextBlockMeta timeToRead={timeToRead} date={date} />}
    </div>
  );
};
