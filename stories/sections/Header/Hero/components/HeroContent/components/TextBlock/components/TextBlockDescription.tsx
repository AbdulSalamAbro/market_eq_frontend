import { FC, ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { HeroContentVariant } from "../../../HeroContent.types";

const classFirstForth = [
  "leading-[45px]",
  "desktop:leading-[59.5px]",
  "text-[40px]",
  "desktop:text-[53px]",
  "font-normal",
  "capitalize",
];
// XMLDocument;
const classForSecondThird = [
  "text-[15px]",
  "desktop:text-xl",
  "font-light",
  "w-full",
  "desktop:w-[604px]",
  "leading-[1.30]",
];

export const textBlockDescription = cva("", {
  variants: {
    intent: {
      [HeroContentVariant.FIRST]: classFirstForth,
      [HeroContentVariant.SECOND]: classForSecondThird,
      [HeroContentVariant.THIRD]: classForSecondThird,
      [HeroContentVariant.FOURTH]: classFirstForth,
    },
  },
});

export type TextBlockDescriptionProps = ComponentProps<"p"> &
  VariantProps<typeof textBlockDescription> & {
    intent: HeroContentVariant;
    description: string;
  };

export const TextBlockDescription: FC<TextBlockDescriptionProps> = ({
  intent,
  description,
}) => {
  return <p className={textBlockDescription({ intent })}>{description}</p>;
};
