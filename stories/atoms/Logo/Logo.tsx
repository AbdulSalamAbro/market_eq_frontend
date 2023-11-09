import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import  Log  from "@/stories/assets/icons/footerLogo.svg";
import  navLog  from "@/stories/assets/icons/nav-Logo.svg";
import styled from "styled-components";

type StyleProps = {
  isFooter?: boolean;
}

const LogoWrapper = styled.div<StyleProps>`
  margin-top: 1px;
  // height: ${({isFooter}) => isFooter ? "18px" : "21px"};

  @media (max-width: 768px) {
    // height: ${({isFooter}) => isFooter ? "17.4px" : "17px"};  
  }
`;

type Props = {
  isFooter?: boolean;
}

export const Logo: FC<Props> = ({isFooter}) => {
  
  return ( 
    <Link href={"/"} className="flex items-center gap-[7px] desktop:gap-[10px]">
      <LogoWrapper isFooter={isFooter}>
        <Image src={isFooter ? Log : navLog} alt="logo" className="!relative" fill />
      </LogoWrapper>
    </Link>
  );
};

Logo.defaultProps = {
  isFooter: false
}