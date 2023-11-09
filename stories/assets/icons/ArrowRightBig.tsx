import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

export type ArrowRightBigProps = ComponentProps<"svg"> & {
  width?: number;
  height?: number;
  fill?: string;
  iconClassName?: string;
};

export const ArrowRightBig: FC<ArrowRightBigProps> = ({
  fill = "currentColor",
  className,
  iconClassName,
}) => (
  <div className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      className={twMerge("w-full h-full", iconClassName)}
      viewBox="0 0 13 8"
    >
      <path d="M12.487 4.907a.575.575 0 0 0 0-.814L8.827.433a.575.575 0 0 0-.813.814L11.267 4.5 8.014 7.753a.575.575 0 1 0 .813.813l3.66-3.66ZM.579 5.075H12.08v-1.15H.579v1.15Z" />
    </svg>
  </div>
);
