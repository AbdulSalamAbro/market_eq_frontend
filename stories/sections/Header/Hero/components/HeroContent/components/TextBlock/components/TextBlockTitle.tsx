import { ComponentProps, FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { HeroContentVariant } from "../../../HeroContent.types";

const classFirstForth = ["text-xs", "desktop:text-lg", "desktop:mb-1"];

const classForSecondThird = [
  "text-[40px]",
  "desktop:text-[53px]",
  "leading-normal",
  "desktop:mb-2",
];

export const textBlockTitle = cva("capitalize", {
  variants: {
    intent: {
      [HeroContentVariant.FIRST]: classFirstForth,
      [HeroContentVariant.SECOND]: classForSecondThird,
      [HeroContentVariant.THIRD]: classForSecondThird,
      [HeroContentVariant.FOURTH]: classFirstForth,
    },
  },
});

export type TextBlockTitleProps = ComponentProps<"h1"> &
  VariantProps<typeof textBlockTitle> & {
    intent: HeroContentVariant;
    title: string;
  };

export const TextBlockTitle: FC<TextBlockTitleProps> = ({ title, intent }) => {
  return <h1 className={textBlockTitle({ intent })}>{title}</h1>;
};
