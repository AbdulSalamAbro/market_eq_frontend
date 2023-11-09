import { ComponentProps, FC } from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

import { Overlay, OverlayVariant } from "@/stories/atoms";
import {
  Breadcrumbs,
  SectionDataType,
  Navbar,
  navLinksData,
  MenuElementVariant,
} from "@/stories/molecules";

import { HeroContent, HeroBottom, HeroContentVariant } from "./components";



export interface HeroProps extends ComponentProps<"div"> {
  image: StaticImageData;
  title: string;
  description: string;
  label: string;
  href: string;
  intent: HeroContentVariant;
  imageClassName?: string;
  pathnames?: string[];
  showLinkWithArrowIcon?: boolean;
  showBreadcrumbs?: boolean;
  showMenu?: boolean;
  menuElementVariant?: MenuElementVariant;
  overlayVariant?: string;
  sectionData: SectionDataType;
  showMeta?: boolean;
  timeToRead?: number;
  date?: string;
  showHeroBottom?: boolean;
  previousHref?: string;
  nextHref?: string;
  previousMin?: number;
  nextMin?: number;
  dark?: boolean;
  buttonTxt: string
}

export const Hero: FC<HeroProps> = ({
  image,
  title,
  description,
  buttonTxt,
  href = "/",
  intent = HeroContentVariant.FIRST,
  imageClassName,
  pathnames = [],
  showLinkWithArrowIcon,
  showBreadcrumbs,
  showMenu,
  menuElementVariant,
  overlayVariant = OverlayVariant.FIRST,
  sectionData,
  showMeta,
  timeToRead,
  date,
  showHeroBottom,
  previousHref,
  nextHref,
  previousMin,
  nextMin,
  dark
}) => {
  const shouldShowHeroBottom =
    showHeroBottom && previousHref && nextHref && previousMin && nextMin;

  const imageClasses = twMerge(
    "object-cover h-full w-full absolute inset-0 object-center",
    imageClassName
  );

  const navbarClasses =
    "border-white border-opacity-5 border-b-2 bg-white bg-opacity-[8%]";
 console.log("imaegeee",image)
  return (
    <div className="relative h-full w-full">
      <Image src={image} alt="background image" className={imageClasses} />
      <Overlay overlayVariant={overlayVariant} dark={dark}/>
      <div className="relative h-full w-full flex flex-col">
        <Navbar links={navLinksData} className={navbarClasses} />
        {showBreadcrumbs && <Breadcrumbs pathnames={pathnames} />}
        <HeroContent
          title={title}
          description={description}
          href={href}
          buttonTxt={buttonTxt}
          intent={intent}
          showLinkWithArrowIcon={showLinkWithArrowIcon}
          showMenu={showMenu}
          menuElementVariant={menuElementVariant}
          sectionData={sectionData}
          showMeta={showMeta}
          timeToRead={timeToRead}
          date={date}
        />
        {shouldShowHeroBottom && (
          <HeroBottom
            previousHref={previousHref}
            nextHref={nextHref}
            previousMin={previousMin}
            nextMin={nextMin}
          />
        )}
      </div>
    </div>
  );
};
