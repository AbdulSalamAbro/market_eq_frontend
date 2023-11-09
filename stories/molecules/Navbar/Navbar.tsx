import { ComponentProps, FC, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  NavbarRightSection,
  NavbarLeftSection,
  LinkDataType,
} from "./components";
import styled from "styled-components";
import menuIcon from "@/stories/assets/icons/Menu.svg";
import closeIcon from "@/stories/assets/icons/Close.svg";

import { IconBtn } from "@/stories/atoms";
import { NavFullPage } from "./components/NavModal";

type HeaderProps = {
  menuActive: boolean;
}

const Header = styled.header<HeaderProps>`
  position: relative;

  background-color: ${({ menuActive }) => menuActive ? "#0E204C" : "transparent"};
  // transition: background-color 0.3s ease-in-out;
  box-shadow: ${({ menuActive }) => menuActive ? "0px 4px 4px #0E204C" : "none"};
  ${({ menuActive }) => menuActive ? "border-bottom: none" : "none"};

    @media (max-width: 768px) {
      padding: 20px;
    }
    
    @media (min-width: 768px) {
      background-color: transparent;
      box-shadow: none;
    }
`;

export interface NavbarProps extends ComponentProps<"header"> {
  links: ReadonlyArray<LinkDataType>;
  isFooter?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ className, links, isFooter }) => {

  const [mblMenu, setMblMenu] = useState(false);

  const handleClick = () => {
    setMblMenu(!mblMenu);
  }

  useEffect(() =>{

    if (mblMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

  }, [mblMenu]);

  return (
    <Header
      menuActive={mblMenu}
      className={twMerge(
        "flex w-full items-center justify-between shadow-nav desktop:px-[50px]",
        className
      )}
    >
      <NavbarLeftSection links={links} isFooter={isFooter}/>
      {
        isFooter ? null : <>

          <NavbarRightSection>

            <IconBtn
              className="ml-10 desktop:hidden"
              label=""
              alt="menu"
              svg={mblMenu ? closeIcon.src : menuIcon.src}
              onClick={handleClick}
            />

          </NavbarRightSection>
          {mblMenu && <NavFullPage />}
        </>
      }

    </Header>
  );
};

Navbar.defaultProps = {
  isFooter: false,
};
