import Link from "next/link";
import Image from "next/image";
import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import rightIcon from "@/stories/assets/icons/ArrowRight.svg";
import arrowLeftIcon from "@/stories/assets/icons/ArrowLeft.svg";
import { IconPositionEnum } from ".";
import { ArrowRightBig } from "@/stories/assets/icons/ArrowRightBig";

export interface LinkWithArrowIconProps extends ComponentProps<"a"> {
  href: string;
  iconPosition?: IconPositionEnum;
  showBiggerIcon?: boolean;
  iconClassName?: string;
  animateOnHover?: boolean;
}

export const LinkWithArrowIcon: FC<LinkWithArrowIconProps> = ({
  href,
  className,
  iconClassName,
  animateOnHover,
  iconPosition,
  showBiggerIcon = false,
  children,
}) => {
  const MotionLink = motion(Link);

  const renderRightArrowIcon = () =>
    showBiggerIcon ? (
      <div className="w-[13px] h-[9px] desktop:w-[18px] desktop:h-[14px] mt-1">
        <ArrowRightBig iconClassName="group-hover:fill-[#306CFE]" />
      </div>
    ) : (
      <Image
        src={rightIcon}
        alt="right arrow icon"
        className={twMerge(
          "w-[12px] tablet:w-[13px] desktop:w-[15.5px] fill-current",
          iconClassName
        )}
      />
    );

  return (
    <MotionLink
      whileHover={{ x: animateOnHover ? 15 : 0 }}
      href={href}
      className={twMerge(
        "group text-[15.5px] desktop:text-[21px] justify-start items-center items-center gap-[9.45px] tablet:gap-[10.5px] desktop:gap-[13px] inline-flex text-base font-normal capitalize",
        className
      )}
    >
      {iconPosition === IconPositionEnum.LEFT && (
        <Image
          src={arrowLeftIcon}
          alt="left arrow icon"
          className={twMerge(
            "w-[12px] tablet:w-[13px] desktop:w-[15.5px]",
            iconClassName
          )}
        />
      )}
      {children}
      {iconPosition === IconPositionEnum.RIGHT && renderRightArrowIcon()}
    </MotionLink>
  );
};
