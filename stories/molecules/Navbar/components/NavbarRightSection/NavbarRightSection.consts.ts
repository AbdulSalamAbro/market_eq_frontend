import searchIcon from "@/stories/assets/icons/Search.svg";
import menuIcon from "@/stories/assets/icons/Menu.svg";
import loginIcon from "@/stories/assets/icons/Login.svg";
import translationIcon from "@/stories/assets/icons/Globe.svg";
import { INavbarRightSectionElement } from "./NavbarRightSection.types";

const className = "gap-2.5 ml-[30px] w-auto";
const iconClassName = "w-[20px] desktop:w-6";
const iconBtnLabelClassName = "hidden desktop:flex text-sm";

export const iconBtnsData: ReadonlyArray<INavbarRightSectionElement> = [
  // will be use in version 2
  // {
  //   svg: searchIcon as string,
  //   label: "Search",
  //   alt: "search button",
  //   className,
  //   iconClassName,
  //   labelClassName: iconBtnLabelClassName,
  // },
  // {
  //   svg: loginIcon as string,
  //   label: "Login",
  //   alt: "login button",
  //   className: `${className} ${iconBtnLabelClassName}`,
  //   iconClassName,
  //   labelClassName: iconBtnLabelClassName,
  // },
  // {
  //   svg: translationIcon as string,
  //   label: "Global / English",
  //   alt: "translation dropdown menu",
  //   className: `${className} ${iconBtnLabelClassName}`,
  //   labelClassName: iconBtnLabelClassName,
  //   iconClassName: "w-4",
  //   dropdownFields: ["English", "Español", "Français", "Português"],
  // },
  {
    svg: menuIcon as string,
    label: "",
    alt: "",
    className: "ml-10 w-[38px] desktop:hidden",
  },
];
