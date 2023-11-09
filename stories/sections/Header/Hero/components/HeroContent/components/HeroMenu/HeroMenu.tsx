import { ComponentProps, FC } from "react";
import { IconPositionEnum } from "@/stories/atoms";
import {
  MenuSection,
  SectionDataType,
  MenuElementVariant,
} from "@/stories/molecules";

export type HeroMenuProps = ComponentProps<"div"> & {
  sectionData: SectionDataType;
};

export const HeroMenu: FC<HeroMenuProps> = ({ sectionData }) => {
  return (
    <div className="ml-[15.2px] w-[177.5px] desktop:w-[300px] h-[352px] tablet:h-[260px] desktop:h-[456px] desktop:pl-[7px] overflow-x-hidden  tablet:overflow-y-scroll desktop:overflow-hidden scrollbar-hide">
      <MenuSection
        iconPosition={IconPositionEnum.RIGHT}
        showBiggerIcon={true}
        menuElementVariant={MenuElementVariant.PRIMARY}
        animateOnHover={true}
        sectionData={sectionData}
      />
    </div>
  );
};
