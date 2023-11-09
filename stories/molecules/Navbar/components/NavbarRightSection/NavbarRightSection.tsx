import React, { FC } from "react";
import { iconBtnsData } from "./NavbarRightSection.consts";
import { IconBtn } from "@/stories/atoms";

type NavRightProps = {
  children?: React.ReactNode;
}

export const NavbarRightSection: FC<NavRightProps> = ({children}) => {
  return (
    // <ul className="flex items-center">
    //   {iconBtnsData.map(
    //     ({ svg, label, alt, className, iconClassName, labelClassName }) => {
    //       return (
    //         <li key={`${label}${alt}`}>
    //           <IconBtn
    //             className={className}
    //             iconClassName={iconClassName}
    //             label={label}
    //             alt={alt}
    //             labelClassName={labelClassName}
    //             svg={svg}
    //           />
    //         </li>
    //       );
    //     }
    //   )}
    // </ul>
    <ul className="flex items-center">
      <li>
        {children}
      </li>
    </ul>
  );
};
