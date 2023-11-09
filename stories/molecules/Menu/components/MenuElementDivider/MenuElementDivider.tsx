import { FC } from "react";
import { twMerge } from "tailwind-merge";

export type MenuElementDividerProps = {
  className?: string;
};

export const MenuElementDivider: FC<MenuElementDividerProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "w-[92%] border-solid border-white/20 mb-px h-px shrink-0 border-t border-b-0 border-x-0",
        className
      )}
    />
  );
};
