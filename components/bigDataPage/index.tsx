"use client";

import { Hero } from "@/stories/sections/Header/Hero";
import img from "../../stories/assets/pictures/server.webp";
import { HeroContentVariant } from "@/stories/sections/Header/Hero/components";
import { OverlayVariant } from "@/stories/atoms";

const BigDataPage = () => {
  return (
    <>
      <Hero
        date="January 23, 2023"
        description="Lorem ipsum dolor sit amet consectetur."
        href="#"
        image={{
          blurDataURL: img.src,
          height: 1926,
          src: img.src,
          width: 2880
        }}
        intent={HeroContentVariant.FOURTH}
        nextHref="#"
        nextMin={21}
        overlayVariant={OverlayVariant.SECOND}
        pathnames={[
          'Insights',
          'Big Data'
        ]}
        previousHref="#"
        previousMin={12}
        showBreadcrumbs
        showHeroBottom
        showMeta
        timeToRead={15}
        title="featured insight" label={""} sectionData={{
          title: "",
          items: []
        }} />
    </>
  )
}

export default BigDataPage;