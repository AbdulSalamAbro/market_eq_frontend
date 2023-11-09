"use client";

import { Hero } from "@/stories/sections/Header/Hero";
import img from "../../stories/assets/pictures/vr-goggles.webp";
import { HeroContentVariant } from "@/stories/sections/Header/Hero/components";
import { OverlayVariant } from "@/stories/atoms";
import { MenuElementVariant } from "@/stories/molecules";
import PageLayer from "../pageLayer";

const InsightPage = ({data}) => {
 
  const trending = data.trendingTopics.map((item)=>(
    {href: item.href,
    label: item.text}
    ))
   
  return (
    <PageLayer bg>
      <Hero
        className="tablet:!flex !gap-10"
        description={data?.heroSection.hero.heroDescription}
        href="#"
        image={{
          blurDataURL: img.src,
          height: 2880,
          src: data.heroSection.hero.heroImage.asset.url,
          width: 1920,
        }}
        intent={HeroContentVariant.THIRD}
        menuElementVariant={MenuElementVariant.PRIMARY}
        overlayVariant={OverlayVariant.SECOND}
        pathnames={["Insights"]}
        sectionData={{
          items: [
           ...trending
          ],
          title: "Trending Topics",
        }}
        showBreadcrumbs
        showMenu
        title={data?.heroSection.hero.heroHeader} label={""} />
    </PageLayer>
  );
};

export default InsightPage;
